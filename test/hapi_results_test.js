const tap = require('tap');

var app = require('../server.js');

var demoApiResult = [
    {
        "url": "https://api.github.com/repos/hapijs/hapi/pulls/3986",
        "id": 326986277,
        "node_id": "MDExOlB1bGxSZXF1ZXN0MzI2OTg2Mjc3",
        "html_url": "https://github.com/hapijs/hapi/pull/3986",
        "diff_url": "https://github.com/hapijs/hapi/pull/3986.diff",
        "patch_url": "https://github.com/hapijs/hapi/pull/3986.patch",
        "issue_url": "https://api.github.com/repos/hapijs/hapi/issues/3986",
        "number": 3986,
        "state": "open",
        "locked": false,
        "title": "Fix server events request description",
        "user": {
            "login": "mgartner",
            "id": 1128750,
            "node_id": "MDQ6VXNlcjExMjg3NTA=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/1128750?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mgartner",
            "html_url": "https://github.com/mgartner",
            "followers_url": "https://api.github.com/users/mgartner/followers",
            "following_url": "https://api.github.com/users/mgartner/following{/other_user}",
            "gists_url": "https://api.github.com/users/mgartner/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mgartner/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mgartner/subscriptions",
            "organizations_url": "https://api.github.com/users/mgartner/orgs",
            "repos_url": "https://api.github.com/users/mgartner/repos",
            "events_url": "https://api.github.com/users/mgartner/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mgartner/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "Since https://github.com/hapijs/hapi/commit/770cc7bad15122f796d938738b7c05b66d2f4b7f#diff-204116a0e3044ec4220e84420843efbcR53, there _are_ `'request'` events that are generated internally, but the current v16 docs say there are not.\r\n\r\nI think this is the right place to update the v16 docs on hapi.dev, but lmk if that's not the case.",
        "created_at": "2019-10-11T00:55:32Z",
        "updated_at": "2019-10-11T03:47:32Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": "9c928b21f17c8b72b19a4afdb94a4bc8000bffe9",
        "assignee": {
            "login": "hueniverse",
            "id": 56631,
            "node_id": "MDQ6VXNlcjU2NjMx",
            "avatar_url": "https://avatars2.githubusercontent.com/u/56631?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/hueniverse",
            "html_url": "https://github.com/hueniverse",
            "followers_url": "https://api.github.com/users/hueniverse/followers",
            "following_url": "https://api.github.com/users/hueniverse/following{/other_user}",
            "gists_url": "https://api.github.com/users/hueniverse/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/hueniverse/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/hueniverse/subscriptions",
            "organizations_url": "https://api.github.com/users/hueniverse/orgs",
            "repos_url": "https://api.github.com/users/hueniverse/repos",
            "events_url": "https://api.github.com/users/hueniverse/events{/privacy}",
            "received_events_url": "https://api.github.com/users/hueniverse/received_events",
            "type": "User",
            "site_admin": false
        },
        "assignees": [
            {
                "login": "hueniverse",
                "id": 56631,
                "node_id": "MDQ6VXNlcjU2NjMx",
                "avatar_url": "https://avatars2.githubusercontent.com/u/56631?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/hueniverse",
                "html_url": "https://github.com/hueniverse",
                "followers_url": "https://api.github.com/users/hueniverse/followers",
                "following_url": "https://api.github.com/users/hueniverse/following{/other_user}",
                "gists_url": "https://api.github.com/users/hueniverse/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/hueniverse/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/hueniverse/subscriptions",
                "organizations_url": "https://api.github.com/users/hueniverse/orgs",
                "repos_url": "https://api.github.com/users/hueniverse/repos",
                "events_url": "https://api.github.com/users/hueniverse/events{/privacy}",
                "received_events_url": "https://api.github.com/users/hueniverse/received_events",
                "type": "User",
                "site_admin": false
            }
        ],
        "requested_reviewers": [],
        "requested_teams": [],
        "labels": [],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/hapijs/hapi/pulls/3986/commits",
        "review_comments_url": "https://api.github.com/repos/hapijs/hapi/pulls/3986/comments",
        "review_comment_url": "https://api.github.com/repos/hapijs/hapi/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/hapijs/hapi/issues/3986/comments",
        "statuses_url": "https://api.github.com/repos/hapijs/hapi/statuses/bff1c0a811d2e6a2b1ef528eecfef2df1868d188",
        "head": {
            "label": "mgartner:fix-server-events-docs",
            "ref": "fix-server-events-docs",
            "sha": "bff1c0a811d2e6a2b1ef528eecfef2df1868d188",
            "user": {
                "login": "mgartner",
                "id": 1128750,
                "node_id": "MDQ6VXNlcjExMjg3NTA=",
                "avatar_url": "https://avatars3.githubusercontent.com/u/1128750?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mgartner",
                "html_url": "https://github.com/mgartner",
                "followers_url": "https://api.github.com/users/mgartner/followers",
                "following_url": "https://api.github.com/users/mgartner/following{/other_user}",
                "gists_url": "https://api.github.com/users/mgartner/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mgartner/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mgartner/subscriptions",
                "organizations_url": "https://api.github.com/users/mgartner/orgs",
                "repos_url": "https://api.github.com/users/mgartner/repos",
                "events_url": "https://api.github.com/users/mgartner/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mgartner/received_events",
                "type": "User",
                "site_admin": false
            },
            "repo": {
                "id": 214312430,
                "node_id": "MDEwOlJlcG9zaXRvcnkyMTQzMTI0MzA=",
                "name": "hapi",
                "full_name": "mgartner/hapi",
                "private": false,
                "owner": {
                    "login": "mgartner",
                    "id": 1128750,
                    "node_id": "MDQ6VXNlcjExMjg3NTA=",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/1128750?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/mgartner",
                    "html_url": "https://github.com/mgartner",
                    "followers_url": "https://api.github.com/users/mgartner/followers",
                    "following_url": "https://api.github.com/users/mgartner/following{/other_user}",
                    "gists_url": "https://api.github.com/users/mgartner/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/mgartner/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/mgartner/subscriptions",
                    "organizations_url": "https://api.github.com/users/mgartner/orgs",
                    "repos_url": "https://api.github.com/users/mgartner/repos",
                    "events_url": "https://api.github.com/users/mgartner/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/mgartner/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "html_url": "https://github.com/mgartner/hapi",
                "description": ":office: Server Framework  for Node.js",
                "fork": true,
                "url": "https://api.github.com/repos/mgartner/hapi",
                "forks_url": "https://api.github.com/repos/mgartner/hapi/forks",
                "keys_url": "https://api.github.com/repos/mgartner/hapi/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/mgartner/hapi/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/mgartner/hapi/teams",
                "hooks_url": "https://api.github.com/repos/mgartner/hapi/hooks",
                "issue_events_url": "https://api.github.com/repos/mgartner/hapi/issues/events{/number}",
                "events_url": "https://api.github.com/repos/mgartner/hapi/events",
                "assignees_url": "https://api.github.com/repos/mgartner/hapi/assignees{/user}",
                "branches_url": "https://api.github.com/repos/mgartner/hapi/branches{/branch}",
                "tags_url": "https://api.github.com/repos/mgartner/hapi/tags",
                "blobs_url": "https://api.github.com/repos/mgartner/hapi/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/mgartner/hapi/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/mgartner/hapi/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/mgartner/hapi/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/mgartner/hapi/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/mgartner/hapi/languages",
                "stargazers_url": "https://api.github.com/repos/mgartner/hapi/stargazers",
                "contributors_url": "https://api.github.com/repos/mgartner/hapi/contributors",
                "subscribers_url": "https://api.github.com/repos/mgartner/hapi/subscribers",
                "subscription_url": "https://api.github.com/repos/mgartner/hapi/subscription",
                "commits_url": "https://api.github.com/repos/mgartner/hapi/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/mgartner/hapi/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/mgartner/hapi/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/mgartner/hapi/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/mgartner/hapi/contents/{+path}",
                "compare_url": "https://api.github.com/repos/mgartner/hapi/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/mgartner/hapi/merges",
                "archive_url": "https://api.github.com/repos/mgartner/hapi/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/mgartner/hapi/downloads",
                "issues_url": "https://api.github.com/repos/mgartner/hapi/issues{/number}",
                "pulls_url": "https://api.github.com/repos/mgartner/hapi/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/mgartner/hapi/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/mgartner/hapi/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/mgartner/hapi/labels{/name}",
                "releases_url": "https://api.github.com/repos/mgartner/hapi/releases{/id}",
                "deployments_url": "https://api.github.com/repos/mgartner/hapi/deployments",
                "created_at": "2019-10-11T00:50:43Z",
                "updated_at": "2019-10-11T00:50:45Z",
                "pushed_at": "2019-10-11T00:51:34Z",
                "git_url": "git://github.com/mgartner/hapi.git",
                "ssh_url": "git@github.com:mgartner/hapi.git",
                "clone_url": "https://github.com/mgartner/hapi.git",
                "svn_url": "https://github.com/mgartner/hapi",
                "homepage": "https://hapi.dev",
                "size": 16447,
                "stargazers_count": 0,
                "watchers_count": 0,
                "language": null,
                "has_issues": false,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": false,
                "has_pages": false,
                "forks_count": 0,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 0,
                "license": {
                    "key": "other",
                    "name": "Other",
                    "spdx_id": "NOASSERTION",
                    "url": null,
                    "node_id": "MDc6TGljZW5zZTA="
                },
                "forks": 0,
                "open_issues": 0,
                "watchers": 0,
                "default_branch": "master"
            }
        },
        "base": {
            "label": "hapijs:v16-commercial",
            "ref": "v16-commercial",
            "sha": "13efd57b3ae4b6f228340d88c3cc8d3e68052a42",
            "user": {
                "login": "hapijs",
                "id": 3774533,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjM3NzQ1MzM=",
                "avatar_url": "https://avatars1.githubusercontent.com/u/3774533?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/hapijs",
                "html_url": "https://github.com/hapijs",
                "followers_url": "https://api.github.com/users/hapijs/followers",
                "following_url": "https://api.github.com/users/hapijs/following{/other_user}",
                "gists_url": "https://api.github.com/users/hapijs/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/hapijs/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/hapijs/subscriptions",
                "organizations_url": "https://api.github.com/users/hapijs/orgs",
                "repos_url": "https://api.github.com/users/hapijs/repos",
                "events_url": "https://api.github.com/users/hapijs/events{/privacy}",
                "received_events_url": "https://api.github.com/users/hapijs/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "repo": {
                "id": 2163263,
                "node_id": "MDEwOlJlcG9zaXRvcnkyMTYzMjYz",
                "name": "hapi",
                "full_name": "hapijs/hapi",
                "private": false,
                "owner": {
                    "login": "hapijs",
                    "id": 3774533,
                    "node_id": "MDEyOk9yZ2FuaXphdGlvbjM3NzQ1MzM=",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/3774533?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/hapijs",
                    "html_url": "https://github.com/hapijs",
                    "followers_url": "https://api.github.com/users/hapijs/followers",
                    "following_url": "https://api.github.com/users/hapijs/following{/other_user}",
                    "gists_url": "https://api.github.com/users/hapijs/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/hapijs/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/hapijs/subscriptions",
                    "organizations_url": "https://api.github.com/users/hapijs/orgs",
                    "repos_url": "https://api.github.com/users/hapijs/repos",
                    "events_url": "https://api.github.com/users/hapijs/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/hapijs/received_events",
                    "type": "Organization",
                    "site_admin": false
                },
                "html_url": "https://github.com/hapijs/hapi",
                "description": "The Simple, Secure Framework Developers Trust",
                "fork": false,
                "url": "https://api.github.com/repos/hapijs/hapi",
                "forks_url": "https://api.github.com/repos/hapijs/hapi/forks",
                "keys_url": "https://api.github.com/repos/hapijs/hapi/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/hapijs/hapi/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/hapijs/hapi/teams",
                "hooks_url": "https://api.github.com/repos/hapijs/hapi/hooks",
                "issue_events_url": "https://api.github.com/repos/hapijs/hapi/issues/events{/number}",
                "events_url": "https://api.github.com/repos/hapijs/hapi/events",
                "assignees_url": "https://api.github.com/repos/hapijs/hapi/assignees{/user}",
                "branches_url": "https://api.github.com/repos/hapijs/hapi/branches{/branch}",
                "tags_url": "https://api.github.com/repos/hapijs/hapi/tags",
                "blobs_url": "https://api.github.com/repos/hapijs/hapi/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/hapijs/hapi/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/hapijs/hapi/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/hapijs/hapi/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/hapijs/hapi/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/hapijs/hapi/languages",
                "stargazers_url": "https://api.github.com/repos/hapijs/hapi/stargazers",
                "contributors_url": "https://api.github.com/repos/hapijs/hapi/contributors",
                "subscribers_url": "https://api.github.com/repos/hapijs/hapi/subscribers",
                "subscription_url": "https://api.github.com/repos/hapijs/hapi/subscription",
                "commits_url": "https://api.github.com/repos/hapijs/hapi/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/hapijs/hapi/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/hapijs/hapi/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/hapijs/hapi/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/hapijs/hapi/contents/{+path}",
                "compare_url": "https://api.github.com/repos/hapijs/hapi/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/hapijs/hapi/merges",
                "archive_url": "https://api.github.com/repos/hapijs/hapi/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/hapijs/hapi/downloads",
                "issues_url": "https://api.github.com/repos/hapijs/hapi/issues{/number}",
                "pulls_url": "https://api.github.com/repos/hapijs/hapi/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/hapijs/hapi/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/hapijs/hapi/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/hapijs/hapi/labels{/name}",
                "releases_url": "https://api.github.com/repos/hapijs/hapi/releases{/id}",
                "deployments_url": "https://api.github.com/repos/hapijs/hapi/deployments",
                "created_at": "2011-08-06T00:35:39Z",
                "updated_at": "2019-10-26T13:35:10Z",
                "pushed_at": "2019-10-20T04:35:15Z",
                "git_url": "git://github.com/hapijs/hapi.git",
                "ssh_url": "git@github.com:hapijs/hapi.git",
                "clone_url": "https://github.com/hapijs/hapi.git",
                "svn_url": "https://github.com/hapijs/hapi",
                "homepage": "https://hapi.dev",
                "size": 16450,
                "stargazers_count": 11684,
                "watchers_count": 11684,
                "language": "JavaScript",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": false,
                "has_pages": false,
                "forks_count": 1199,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 2,
                "license": {
                    "key": "other",
                    "name": "Other",
                    "spdx_id": "NOASSERTION",
                    "url": null,
                    "node_id": "MDc6TGljZW5zZTA="
                },
                "forks": 1199,
                "open_issues": 2,
                "watchers": 11684,
                "default_branch": "master"
            }
        },
        "_links": {
            "self": {
                "href": "https://api.github.com/repos/hapijs/hapi/pulls/3986"
            },
            "html": {
                "href": "https://github.com/hapijs/hapi/pull/3986"
            },
            "issue": {
                "href": "https://api.github.com/repos/hapijs/hapi/issues/3986"
            },
            "comments": {
                "href": "https://api.github.com/repos/hapijs/hapi/issues/3986/comments"
            },
            "review_comments": {
                "href": "https://api.github.com/repos/hapijs/hapi/pulls/3986/comments"
            },
            "review_comment": {
                "href": "https://api.github.com/repos/hapijs/hapi/pulls/comments{/number}"
            },
            "commits": {
                "href": "https://api.github.com/repos/hapijs/hapi/pulls/3986/commits"
            },
            "statuses": {
                "href": "https://api.github.com/repos/hapijs/hapi/statuses/bff1c0a811d2e6a2b1ef528eecfef2df1868d188"
            }
        },
        "author_association": "NONE",
        "merged": false,
        "mergeable": true,
        "rebaseable": true,
        "mergeable_state": "unstable",
        "merged_by": null,
        "comments": 1,
        "review_comments": 0,
        "maintainer_can_modify": true,
        "commits": 1,
        "additions": 1,
        "deletions": 2,
        "changed_files": 1
    }
  ];

var expectedPrResult = [
    {
      url: 'https://github.com/hapijs/hapi/pull/3986',
      commit_url: 'https://api.github.com/repos/hapijs/hapi/pulls/3986/commits',
      commit_count: 0,
      comments_url: 'https://api.github.com/repos/hapijs/hapi/issues/3986/comments',
      comment_count: 0,
      creator: 'mgartner',
      title: 'Fix server events request description'
    }
  ];

tap.same((app.mapPullRequests(demoApiResult)), expectedPrResult, "The expected PR result matches");
