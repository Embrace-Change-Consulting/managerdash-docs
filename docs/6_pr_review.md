---
sidebar_position: 6
title: Pull Request Review
---

This guide covers how to fetch, review, and rate pull requests in ManagerDash.

## Understanding PR Review

The PR Review feature helps you:
- Fetch PRs directly from GitHub
- Rate PR quality and complexity
- Add context and notes to each PR
- Track PR metrics over time
- Include PR evaluations in reports

### Prerequisites

To use PR Review, you need:
- GitHub username configured for the person (in their alias profile)
- GitHub Personal Access Token (configured in Settings → Preferences)
- Internet connection to fetch from GitHub

## Setting Up GitHub Integration

See "GitHub Token Setup" for instructions on how to generate a token and add it to ManagerDash

## Fetching Pull Requests

### Basic Fetch

1. Select a person from the sidebar
2. Click the **PR Review** tab
3. Set the date range:
   - **Start Date**: Beginning of period
   - **End Date**: End of period (today by default)
4. Click **"Fetch Pull Requests"**
5. Wait for the fetch to complete (may take several seconds)
6. PRs appear grouped by repository

### What Gets Fetched

The system fetches:
- **Closed PRs only**: Merged or closed (not open PRs)
- **Author Match**: PRs where the person is the author
- **Date Filter**: PRs closed within the selected range
- **All Repos**: Across all repositories they (and your token) have access to

### PR Data Included

For each PR:
- **Title**: PR name
- **Repository**: Repo name
- **PR Number**: Link to GitHub
- **Status**: Closed/Merged
- **Dates**: Created and closed dates
- **Changes**: Lines added/deleted
- **Files**: Number of files changed
- **Comments**: Total comments and review comments
- **Labels**: Any GitHub labels

## Rating Pull Requests

### The Traffic Light System

PRs are rated using a three-level system:

| Symbol | Color | Meaning |
|--------|-------|---------|
| - | Yellow | Feedback opportunity |
| = | Blue | Meets expectations |
| + |  Green | Exceeds expectations |

### How to Rate

1. Find the PR in the list
2. Click one of the three colored circles:
   - **Yellow** (left): Feedback opportunity
   - **Blue** (middle): Meeting expectations
   - **Green** (right): Exceeding expectations
3. The circle glows and enlarges when selected
4. Rating saves automatically

### Rating Criteria

**Feedback opportunity (-)**:
Rating a pull request as a feedback opportunity is a way for managers to find trends in technical contributions, not as an error tally. It should be relative to the engineer's past performance and experience level. For example. A PR from an early career engineer that undergoes multiple rounds of review may suggest a mini retro in a 1:1 to ensure they are learning from the experience. A PR from a more senior engineer that requires significant rework may suggest a larger coaching conversation around doing more thorough planning or technical design. 

Here are a few other reasons why you may mark a PR as a feedback opportunity:

- Requires significant rework
- Multiple rounds of review needed
- Poor code quality or design, or would have benefitted from additional planning
- Incomplete testing or documentation
- Breaks existing functionality/needs to be reverted

When you mark a PR as a Feedback Opportunity, your notes will also be recorded as pending feedback.

**Meeting Expectations (=)**:
A PR is Meeting Expectations if it is a good representation of the contribution expected from an engineer at any level. What is defined as quality contributions will vary between companies and teams, but some examples of contributions that meet expectations are:

- Clean, well-structured code
- Normal review process
- Basic testing included
- Clear purpose and implementation
- Minor feedback addressed
- Descriptive test cases

**Exceeding Expectations (+)**:
A PR is Exceeding Expectations if it represents an outstanding contribution from an engineer who is operating above their level. For an entry-level engineer, an exceptional contribution could be one that fixes a tricky race-condition. For a more senior engineer, an exceptional contribution could be one that solves an entire class of problems through a clear refactor. Some other reasons why a contribution may be rated as exceeding expectations:

- Exceptional quality
- Comprehensive testing
- Great documentation
- Handles edge cases
- Considers future maintenance

### When to Rate

**Rate PRs When**:
- You've reviewed the PR thoroughly
- You have enough context to evaluate
- The contribution is meaningful (ie: not bumping a dependency)
- It would provide good context during a performance review

**Don't Rate If**:
- You haven't reviewed it
- You lack context to judge
- It's trivial (typo fixes, etc.)

## Adding Notes to PRs

### Why Add Notes

Notes help you:
- Document reasoning for ratings
- Capture specific examples
- Remember context months later
- Prepare for performance discussions
- Justify ratings in reviews

### How to Add Notes

1. Rate the PR first (select a circle)
2. A text area appears below the PR
3. Type your notes
4. Notes save automatically after 500ms
5. No "Save" button needed

### What to Include in Notes

**Good Notes Include**:
- Specific observations
- Technical details
- Impact assessment
- Review cycle summary
- Learning moments

**Examples**:

```
Not meeting (-):
"Required 3 rounds of review. Initial implementation missed 
error handling and had unclear variable names. Eventually 
got to acceptable state but needed significant guidance."

Meeting (=):
"Solid implementation of feature X. Clear code, good tests. 
One round of minor feedback on naming conventions. 
Merged smoothly."

Exceeding (+):
"Outstanding work on performance optimization. Not only 
solved the immediate problem but proactively added 
benchmarks and documentation. Reduced query time by 80%. 
Excellent example for the team."
```

### Opening in GitHub

Click the **PR title** to open in your browser:
- Opens GitHub PR page
- View full conversation
- See code changes
- Check review comments

## Common Workflows

### Weekly Review

```
Friday:
1. Select team member
2. Set date range to last 7 days (this is the default)
3. Fetch PRs
4. Rate contributions of note
5. Add quick notes
6. Repeat for each team member
```

### Monthly Performance Check

```
End of month:
1. Set date range to last 30 days
2. Fetch PRs (or view PRs already reviewed)
3. Review all PRs for patterns
4. Rate and add detailed notes
5. Include in monthly 1-on-1
```

### Quarterly Review Prep

```
2 weeks before review:
1. Set date range to 90 days
2. Fetch PRs
3. Rate all PRs
4. Add comprehensive notes
5. Look for patterns (improvement/decline)
6. Generate report
7. Use in performance discussions or promotion pitch
```

## Best Practices

### Rating Consistency

1. **Define Standards**: Document what each rating means for your team
2. **Calibrate Regularly**: Discuss ratings with other leads
3. **Context Matters**: Consider complexity and scope
4. **Be Fair**: Don't compare junior to senior
5. **Trend Over Time**: Look for improvement patterns

### Note-Taking

1. **Be Timely**: Add notes within days of merge
2. **Be Specific**: Reference concrete issues or wins
3. **Be Balanced**: Note good the good work you want to highlight, as well as any opportunities for growth
4. **Be Professional**: Focus on work, not person
5. **Be Future-Focused**: Help your future self remember

## Reporting

PR data appears in reports:

### Individual Reports
- Total rated PRs in period
- Rating breakdown (Not meeting/Meeting/Exceeding)
- Individual PR details
- Notes included
- Metrics summary

### Export Format

Reports include:
- PR title and repo
- Rating with label
- Dates and metrics
- Notes for context
- Markdown formatted

## Common Issues

### No PRs Found
**Problem**: Fetch returns no results
**Solution**:
- Verify GitHub username is correct in alias profile
- Check date range (too narrow?)
- Ensure person authored PRs in that period
- Verify GitHub token is valid
- Check internet connection

### Can't Fetch PRs
**Problem**: "Failed to fetch" error
**Solution**:
- Check GitHub token in Preferences
- Verify token has correct permissions
- Check internet connection
- Try refreshing the app
- Generate new token if expired

### Rating Not Saving
**Problem**: Click rating but it doesn't stick
**Solution**:
- Wait for save indicator
- Check console for errors
- Try refreshing the page
- Re-rate the PR

### Notes Disappearing
**Problem**: Type notes but they vanish
**Solution**:
- Wait 500ms after typing (auto-save delay)
- Don't navigate away immediately
- Check that PR was rated first (notes only for rated PRs)
- Try refreshing and re-entering

### GitHub Token Invalid
**Problem**: "Invalid token" error
**Solution**:
- Regenerate token on GitHub
- Ensure correct scopes selected
- Copy entire token (no spaces)
- Save in Preferences
- Try fetching again

## Privacy and Security

### Token Security

- Token is stored locally on your machine
- Never transmitted except to GitHub API
- Rotate tokens periodically
- Revoke old tokens on GitHub
- Don't share your token

### Data Privacy

- All PR data stored locally
- Ratings and notes are private
- Only visible on your machine
- Export carefully for sharing

## Keyboard Shortcuts

While viewing PRs:
- **Tab**: Navigate between PRs
- **1, 2, 3**: Quick rate (Not meeting, Meeting, Exceeding)
- **Enter**: Expand/collapse repository
- **Click Title**: Open in GitHub