---
sidebar_position: 2
id: github-token
title: GitHub Token Setup
description: Generate your GitHub token.
---

This guide provides detailed instructions for creating and configuring a GitHub Personal Access Token for use with ManagerDash.

## Why You Need a GitHub Token

ManagerDash uses the GitHub API to fetch pull request data for your team members. To access this data, you need to provide a Personal Access Token (PAT) that authenticates your requests to GitHub. You do not need a PAT in order to use ManagerDash, but it helps to connect your team's contributions to their feedback.

**What the token enables:**
- Fetching pull requests by author
- Retrieving PR metadata (title, description, dates)
- Getting PR metrics (changes, files, comments)
- Accessing PR labels and status

**What the token does NOT do:**
- Modify any GitHub data
- Create or edit pull requests
- Add comments or reviews
- Change repository settings
- Access private information beyond what you normally see

## Step-by-Step: Creating a GitHub Token

### Step 1: Navigate to GitHub Settings

1. Go to [GitHub.com](https://github.com) and sign in
2. Click your **profile picture** in the top-right corner
3. Click **Settings** from the dropdown menu
4. Scroll down the left sidebar to find **Developer settings** (near the bottom)
5. Click **Developer settings**

### Step 2: Access Personal Access Tokens

1. In the left sidebar of Developer settings, find **Personal access tokens**
2. Click the dropdown arrow to expand it
3. Click **Tokens (classic)**
   - Note: Use "Tokens (classic)" not "Fine-grained tokens" for ManagerDash

### Step 3: Generate New Token

1. Click the **Generate new token** button (top-right)
2. Select **Generate new token (classic)** from the dropdown
3. GitHub may ask you to confirm your password - enter it and continue

### Step 4: Configure Token Settings

**Note field:**
- Enter a descriptive name: `ManagerDash PR Access`
- This helps you identify the token later

**Expiration:**
- Select an expiration period from the dropdown
- Recommended options:
  - **90 days**: Good balance of security and convenience
  - **No expiration**: Convenient but less secure (not recommended)
  - **Custom**: Set your own date
- Note: You'll need to regenerate and update the token when it expires

**Select scopes:**

This is the most important step. You need to grant specific permissions:

✅ **Required Scopes:**

**1. repo (Full control of private repositories)**
   - Check the top-level `repo` checkbox
   - This automatically checks all sub-items:
     - `repo:status` - Access commit status
     - `repo_deployment` - Access deployment status
     - `public_repo` - Access public repositories
     - `repo:invite` - Access repository invitations
     - `security_events` - Read and write security events

**2. read:org (Read org and team membership)**
   - Scroll down to the "admin:org" section
   - Check only `read:org` (NOT the full admin:org)
   - This allows ManagerDash to access organization repositories

❌ **DO NOT check these:**
- `write:org` - Not needed
- `admin:org` - Not needed
- `delete_repo` - Definitely not needed
- `admin:repo_hook` - Not needed
- Any other admin scopes - Not needed

### Step 5: Generate and Copy Token

1. Scroll to the bottom of the page
2. Click the green **Generate token** button
3. GitHub displays your new token (starts with `ghp_`)
4. **IMPORTANT**: Copy the token immediately
   - Click the **copy icon** next to the token
   - Or select and copy the entire token string
5. **⚠️ WARNING**: You will NOT be able to see this token again
   - Once you navigate away, the token is hidden forever
   - If you lose it, you must generate a new one

### Step 6: Save Token Securely (BEFORE Adding to ManagerDash)

**Critical**: Save your token in a secure location first:

**Option 1: Password Manager (Recommended)**
- Add to 1Password, LastPass, Bitwarden, etc.
- Label it clearly: "GitHub PAT - ManagerDash"
- Include the creation date and expiration date

**Option 2: Secure Note**
- Save in encrypted notes app
- Store in secure company vault
- Keep it private and backed up

**DO NOT:**
- ❌ Save in plain text file
- ❌ Email to yourself
- ❌ Store in shared documents
- ❌ Commit to a git repository
- ❌ Share in Slack or chat

## Adding Token to ManagerDash

### Step 1: Open ManagerDash Settings

1. Launch ManagerDash application
2. Look at the bottom of the left sidebar
3. Click the **Settings** (gear icon) button
4. Click **Preferences** from the menu

### Step 2: Enter Token

1. Find the **GitHub Token** or **GitHub Personal Access Token** field
2. Click in the field
3. Paste your token (⌘+V or Ctrl+V)
4. Verify the entire token is pasted
   - Should start with `ghp_`
   - Should be fairly long (around 40+ characters)
5. Click **Save** or **Apply** button

### Step 3: Verify Token Works

1. Select a person with a GitHub username configured
2. Click the **PR Review** tab
3. Set a date range (e.g., last 7 days)
4. Click **Fetch Pull Requests**
5. If successful, PRs should appear
6. If error appears, see Troubleshooting section below

## Token Expiration and Renewal

### When Your Token Expires

GitHub tokens expire based on the expiration date you set. When this happens:

**Symptoms:**
- "Invalid token" error when fetching PRs
- "Authentication failed" messages
- No PRs load

**Solution:**
1. Return to GitHub.com → Settings → Developer settings → Personal access tokens
2. Delete or leave the old token
3. Generate a new token following steps above
4. Copy the new token
5. Update it in ManagerDash Preferences
6. Save and test

### Best Practices for Token Management

**Security:**
- Use 90-day expiration for good security
- Set calendar reminder to renew before expiration
- Delete tokens you're not using
- Never share your token with others

**Documentation:**
- Note when you created the token
- Note when it expires
- Keep track in password manager
- Document where the token is used

**Rotation:**
- Generate new token before old one expires
- Update ManagerDash immediately
- Verify new token works
- Delete old token from GitHub

## Troubleshooting

### Token Not Working

**Problem**: "Invalid token" or "Authentication failed" error

**Solutions to try:**

1. **Check token format:**
   - Should start with `ghp_`
   - No spaces before or after
   - Complete token copied (all ~40+ characters)

2. **Verify scopes:**
   - Go back to GitHub → Settings → Developer settings → Personal access tokens
   - Click on your ManagerDash token
   - Verify `repo` and `read:org` are checked
   - If not, regenerate token with correct scopes

3. **Check expiration:**
   - In token list, check expiration column
   - If expired, generate new token
   - Update in ManagerDash

4. **Copy token again:**
   - Sometimes copy/paste can fail
   - Delete token from ManagerDash Preferences
   - Copy from GitHub again
   - Paste fresh copy
   - Save

5. **Generate completely new token:**
   - Delete old token on GitHub
   - Create new one from scratch
   - Follow all steps carefully
   - Add to ManagerDash

### No PRs Found

**Problem**: Token works but no PRs appear

**Check:**

1. **GitHub username:**
   - Go to person's profile in ManagerDash
   - Verify GitHub username is correct
   - Should match their actual GitHub username
   - Case doesn't matter

2. **Date range:**
   - Check if date range is too narrow
   - Expand to longer period (30 days)
   - Verify person had PRs in that period

3. **Repository access:**
   - Verify person authored PRs in repos you can access
   - Private repos require your token to have access
   - Check if PRs exist on GitHub.com

### Rate Limiting

**Problem**: "Rate limit exceeded" error

**Explanation:**
- GitHub API has rate limits
- Authenticated tokens: 5,000 requests/hour
- This is usually more than enough

**Solutions:**
- Wait an hour for limit to reset
- Check if another tool is using same token
- Don't fetch PRs too frequently
- Consider using different token if needed

### Token Compromised

**If you think your token was exposed:**

**Immediate Actions:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Find the compromised token
3. Click **Delete** button
4. Confirm deletion
5. Generate new token immediately
6. Update ManagerDash with new token

**Prevention:**
- Never commit tokens to git
- Don't share in chat/email
- Use password manager
- Rotate tokens regularly
- Check GitHub for unauthorized access

## Security Best Practices

### Token Storage

**✅ DO:**
- Store in password manager
- Keep in encrypted storage
- Use secure company vault
- Treat like a password

**❌ DON'T:**
- Store in plain text
- Share with others
- Commit to repositories
- Include in screenshots
- Email or message

### Token Scope Limitations

**Principle of Least Privilege:**
- Only grant permissions you need
- Don't check extra scopes "just in case"
- Review scopes periodically
- Minimize admin permissions

**For ManagerDash, ONLY need:**
- `repo` (for PR access)
- `read:org` (for org repos)
- Nothing else!

### Regular Auditing

**Monthly:**
- Review active tokens on GitHub
- Delete unused tokens
- Check token expiration dates
- Verify ManagerDash still works

**Quarterly:**
- Rotate long-lived tokens
- Update documentation
- Review access patterns
- Verify security practices

### Company Policies

**Check with your organization:**
- May have specific token policies
- Might require certain expiration
- Could have token management tools
- May audit token usage

**Follow company guidelines for:**
- Token expiration periods
- Storage requirements
- Approval processes
- Security standards

## Alternative: Fine-Grained Tokens

**Note**: ManagerDash currently works best with Classic tokens. If you want to use Fine-grained tokens (more granular control):

**Advantages:**
- More specific permissions
- Repository-specific access
- Better security audit trail

**Disadvantages:**
- More complex setup
- May require repo-by-repo config
- Not all features supported by all apps

**For now, stick with Classic tokens unless your organization requires Fine-grained.**

## FAQ

**Q: How long should my token last?**
A: 90 days is recommended. Balances security with convenience. Set a calendar reminder to renew.

**Q: Can multiple people use the same token?**
A: Technically yes, but don't do it. Each user should have their own token for security and auditing.

**Q: Can I use the same token for multiple apps?**
A: Yes, but it's better to create separate tokens for different apps. Easier to revoke if one is compromised.

**Q: What if I forgot to copy my token?**
A: You can't recover it. Delete that token and generate a new one.

**Q: Will this token let ManagerDash modify my repos?**
A: No. While the `repo` scope technically grants write access, ManagerDash only reads PR data. It never writes.

**Q: Do I need a different token for each team member?**
A: No. One token per ManagerDash installation is sufficient. It's used to fetch PRs for all team members.

**Q: What happens if my token expires while using ManagerDash?**
A: PR fetching will fail with an "Invalid token" error. Generate and add a new token to fix.

**Q: Can I use a GitHub App instead of a token?**
A: ManagerDash currently requires Personal Access Tokens. GitHub Apps aren't supported yet.

**Q: Is my token stored securely in ManagerDash?**
A: Yes. ManagerDash stores the token locally using Electron's secure storage. It's never transmitted anywhere except to GitHub's API.

## Summary Checklist

Before you finish, verify:

- [ ] Token created with correct scopes (`repo` + `read:org`)
- [ ] Token copied and saved in secure location
- [ ] Token added to ManagerDash Preferences
- [ ] Token saved in ManagerDash
- [ ] Token tested by fetching PRs
- [ ] PRs appear successfully
- [ ] Token documented with expiration date
- [ ] Calendar reminder set for renewal
- [ ] Old/unused tokens deleted from GitHub

## Need Help?

If you're still having issues:

1. Review the [PR Review Guide](../6_pr_review.md)
2. Check the Troubleshooting section above
3. Verify all steps were followed exactly
4. Try generating a completely new token
5. Check GitHub's status page for API issues
6. Review your organization's GitHub policies

## Additional Resources

**GitHub Documentation:**
- [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [About scopes for OAuth apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps)
- [Token expiration and revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)

**Security Best Practices:**
- [Securing your account with 2FA](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa)
- [Reviewing your security log](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)
