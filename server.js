const express = require('express');
const request = require('request-promise');
const path = require('path');

const headers = {'User-Agent' : 'repository-viewer'};
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index', {title: 'Search GitHub Repo'});
});

app.post('/search', (req, res, next) => {
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
        let prInfo = pullRequests.map(pr => {
            return {
                url: pr['url'],
                commit_url: pr['commits_url'],
                commit_count: 0,
                comments_url: pr['comments_url'],
                comment_count: 0,
                creator: pr['user']['login']
            }
        });
        console.log(prInfo);

        //todo: get the comment and commit counts
    
    }).catch(err => console.error(err));

});


getCommentCount = async (commentUrl) => {
    let options = {
        url: commentUrl,
        headers: headers,
        json: true
    };

    return request.get(options).then(res => {
        console.log('COMMENT COUNT RES', res.length);
        return res.length;

    }).catch(err => console.error(err));

}

app.listen(port, () => console.log(`App listening on port ${port}`));