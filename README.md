Git Basics and Undoing Commits

Getting Started with Git

Initial Setup

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

Verify configuration:

git config --list




Creating and Initializing a Repository
Create a new local repository:

git init


Clone an existing one:

git clone <repo_url>




Basic Commands
| Action | Command | Description |
|--|-|-|
| Check repo status | `git status` | Shows modified, staged, or untracked files |
| Add files | `git add <file>` or `git add .` | Stages changes for commit |
| Commit changes | `git commit -m "message"` | Saves staged changes |
| View history | `git log --oneline` | Shows commit history (short form) |
| Check difference | `git diff` | Shows unstaged changes |
| Check remote | `git remote -v` | Lists connected remote repos |
| Push changes | `git push origin <branch>` | Uploads commits to remote |
| Pull updates | `git pull origin <branch>` | Downloads and merges remote commits |
| Create branch | `git branch <branchname>` | Makes a new branch |
| Switch branch | `git checkout <branchname>` | Moves between branches |
| Merge branch | `git merge <branchname>` | Merges changes into current branch |



 Undoing or Reversing Commits

1. Undo Last Commit but Keep Changes
Keep your work and edit again:

git reset --soft HEAD~1


Unstage the changes but keep them in working directory:

git reset --mixed HEAD~1




 2. Completely Remove Last Commit (Discard Changes)
Use only if you want to **delete the last commit and its changes**:

git reset --hard HEAD~1

 *This cannot be undone easily.*



 3. Revert a Commit (Safe for Shared Branches)
Creates a **new commit** that undoes the changes of a previous commit:

git revert <commit_hash>

Example:

git revert a1b2c3d




 4. Undo a Pushed Commit (Force Push)
If you already pushed the wrong commit and need to rewrite history:

git reset --hard HEAD~1
git push origin <branch_name> --force

 *Avoid this on shared branches — it rewrites history.*



 Tip
Find commit IDs quickly:

git log --oneline




Useful Helpers

git stash              # Temporarily saves uncommitted changes
git stash pop          # Restores stashed changes
git branch -d <name>   # Deletes local branch
git clean -fd          # Removes untracked files/folders



 Example Workflow

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main

