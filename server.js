const express = require('express');
const request = require('request-promise');
const path = require('path');

require('dotenv').config()

const headers = {
    'User-Agent' : `${process.env.USERNAME}`,
    'Authorization' : `Bearer ${process.env.AUTH_TOKEN}`
};
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.render('index', {title: 'Search GitHub Repo'});
});

app.post('/search', async (req, res, next) => {
    let path = new URL(req.body['url']).pathname;
    
    let options = {
        url: `https://api.github.com/repos${path}/pulls`,
        headers: headers,
        json: true
    }
    request.get(options).then((pullRequests) => {
        // It should display a list of open pull requests 
        // along with the number of commits in that PR, the 
        // number of comments on the PR, and the user that opened it.
        return pullRequests.map(pr => {
            return {
                url: pr['html_url'],
                commit_url: pr['commits_url'],
                commit_count: 0,
                comments_url: pr['comments_url'],
                comment_count: 0,
                creator: pr['user']['login'],
                title: pr['title']
            }
        });
    }).then(prs => {
        asyncForEach(prs, async (pr) => {
            let commentCount = await getCommentsAndCommitsCounts(pr.comments_url);
            let commitCount = await getCommentsAndCommitsCounts(pr.commit_url);
            pr.comment_count = commentCount;
            pr.commit_count = commitCount;
        }).then(() => {
            res.render('results', {prs: prs, title: 'Search Results'});
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));

});


getCommentsAndCommitsCounts = async (commentUrl) => {
    let options = {
        url: commentUrl,
        headers: headers,
        json: true
    };
    return request.get(options).then(res => {
        return Promise.resolve(res.length);

    }).catch(err => console.error(err));

}

asyncForEach = async (prArray, callback) => {
    for (let index = 0; index < prArray.length; index++) {
        await callback(prArray[index], index, prArray);
    }
}


app.listen(port, () => console.log(`App listening on port ${port}`));