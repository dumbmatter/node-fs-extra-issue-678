See https://github.com/jprichardson/node-fs-extra/issues/678

On Ubuntu 18.04 and Node.js 10.15.3:

    $ node index.js 
    /home/jdscheff/projects/node-fs-extra-issue-678/node_modules/fs-extra/lib/util/stat.js:149
        throw err
        ^

    RangeError: Maximum call stack size exceeded
        at Number (<anonymous>)
        at dateFromNumeric (internal/fs/utils.js:232:19)
        at new Stats (internal/fs/utils.js:266:16)
        at getStatsFromBinding (internal/fs/utils.js:312:10)
        at Object.statSync (fs.js:851:10)
        at checkParentPathsSync (/home/jdscheff/projects/node-fs-extra-issue-678/node_modules/fs-extra/lib/util/stat.js:143:21)
        at checkParentPathsSync (/home/jdscheff/projects/node-fs-extra-issue-678/node_modules/fs-extra/lib/util/stat.js:154:10)
        at checkParentPathsSync (/home/jdscheff/projects/node-fs-extra-issue-678/node_modules/fs-extra/lib/util/stat.js:154:10)
        at checkParentPathsSync (/home/jdscheff/projects/node-fs-extra-issue-678/node_modules/fs-extra/lib/util/stat.js:154:10)
        at checkParentPathsSync (/home/jdscheff/projects/node-fs-extra-issue-678/node_modules/fs-extra/lib/util/stat.js:154:10)

Downgrade to fs-extra 7.0.1 and it works fine.
