# Git worktrees

- with git worktree you can manage multiple working trees from the same github repo
- when you do `git clone` or `git init`, git creates what is called the "main worktree" for the repository.
- you should clone your repo as a bare repository to work properly with git-worktrees, because that will not create the main wokrtree mentioned before.
- the biggest benefit about git worktrees is that you can work on multiple feature/branches without the worry of mixing dependencies or those kind of side effects.

## How I use git worktree

- the commands I use are:

  - `git worktree add`
  - `git worktree remove`
  - `git worktree list` (occacionally)

- first I clone any repo with the flag `--bare`
- cloning the repo as a bare repo does add the `.git` at the end of the name, so I rename it to remove it.
- I also like to have all my worktrees in a separate folder from the repo bare files, so all my working trees will live inside the `wt` folder (we will create it in the next step)

- **to create your first working tree:**
  - I run `git worktree add wt/main` (syntax: `git worktree add <LOCATION_AND_NAME> <BRANCH?>`)
  - this will create a new working tree called `main` inside the `wt` folder with the `main` branch checked out (or the main branch you created)
  - inside this new folder you will see all the repo files as if you normally clone the repo. now you can work!
- **If I want to create a new working tree:**
  - first I move back to the repo root
  - then run `git worktree add wt/new-feature`
  - this will create a new working tree inside `wt/new-feature` with a NEW BRANCH checked out called `new-feature`. The fact that it created a new branch is that when working with working trees, you cannot have two working trees for the same branch.
  - now I can start working on the new feature without worry from contaminating the worktree with other changes.
- **If I want to create a new hotfix branch:**
  - I don't have to stash any of my current changes!, I just go to the repo root and run `git worktree add wt/hotfix-bug`
  - this will create a new working tree inside `wt/hotfix-bug` and a new branch called `hotfix-bug`.
- **If I want to create a new working tree from a current branch:**
  - `git worktree add wt/my-branch my-branch`
- **If I want to create a new working tree from a remote branch:**

  - here I had some issues checking out and fetching from the origin correctly, so I modified the `config` file inside the bare repo files. inside the `[remote="origin"]`, I added this line:

  ```
  fetch = +refs/heads/*:refs/remotes/origin/*
  ```

  result:

  ```
  [core]
    repositoryformatversion = 0
    filemode = true
    bare = true
    ignorecase = true
    precomposeunicode = true
  [remote "origin"]
    url = https://github.com/mintterteam/mintter.git
    fetch = +refs/heads/*:refs/remotes/origin/*         // <===== THIS!
  [branch "master"]
    remote = origin
    merge = refs/heads/master
  ```

  - then I was able to do `fit fetch --all` and bring all the remote branches
  - now I run `git worktree add wt/my-other-branch origin/my-other-branch`
  - this does not create a new branch but creates the worktree with the branch you specified

- **If I want to remove a worktree:**
  - `git worktree remove <NAME>`
  - you can do `git worktree list` to check the names of your current worktrees

## QA

- **how can I merge branches?**
  - the same way you do with a normal repo. no changes here
- **If I accidentally created a worktree in the wrong place, what can I do?**
  - easy, you do `git worktree move <CURRENT_PLACE> <NEW_DESTINATION>` and you are good to go.
  - ⚠️ Don't do a normal folder move!, because this will mess up your bare repo
- **If I accidentally start adding changes to the wrong worktree, how can I mvoe those changes to the correct worktree?**
  - lucky for us, everything you stash is at the repo level, so you can stash your changes and pop them in the correct worktree. easy peasy!
- **A colleague needs help with a quick fix, what should I do?**
  - create a new worktree based on his/her branch or a new branch depending on your start point and do your thing!
- **have more questions?**
  - send them to me in Twitter!
