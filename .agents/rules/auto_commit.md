---
description: Automatically commit and push changes at the end of every turn
trigger: always_on
---

# Auto Commit and Push Rule

At the end of every turn, if you have made any modifications to files in the workspace, you MUST ALWAYS execute a git commit and push.

**Instructions:**
1. Check if there are any unstaged or untracked changes (`git status`).
2. If there are changes, stage them (`git add .`).
3. Commit the changes with a concise and descriptive message summarizing what you did in that turn (`git commit -m "..."`).
4. Push the changes to the current branch (`git push`).
5. Only stop your turn after these steps are completed.
