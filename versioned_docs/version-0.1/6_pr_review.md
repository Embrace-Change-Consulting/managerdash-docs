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

### Creating a GitHub Token

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Name it "ManagerDash"
4. Select scopes:
   - `repo` (all sub-scopes)
   - `read:org`
5. Generate and copy the token
6. **Important**: Save it securely; you won't see it again

### Adding Token to ManagerDash

1. Open ManagerDash
2. Go to Settings (gear icon in sidebar)
3. Click **Preferences**
4. Find **GitHub Token** field
5. Paste your token
6. Click **Save**

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

### Date Range Guidelines

**Common Ranges**:
- **Last Week**: 7 days (default)
- **Last Month**: 30 days
- **Last Quarter**: 90 days
- **Last Year**: 365 days

**Tips**:
- Use shorter ranges for detailed reviews
- Use longer ranges for performance summaries
- Align with review periods (quarterly, semi-annual)

### What Gets Fetched

The system fetches:
- **Closed PRs only**: Merged or closed (not open PRs)
- **Author Match**: PRs where the person is the author
- **Date Filter**: PRs closed within the selected range
- **All Repos**: Across all repositories they have access to

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

| Symbol | Rating | Color | Meaning |
|--------|--------|-------|---------|
| - | Below | Red | Below expectations |
| = | Meeting | Yellow | Meets expectations |
| + | Exceeding | Green | Exceeds expectations |

### How to Rate

1. Find the PR in the list
2. Click one of the three colored circles:
   - **Red** (left): Below expectations
   - **Yellow** (middle): Meeting expectations
   - **Green** (right): Exceeding expectations
3. The circle glows and enlarges when selected
4. Rating saves automatically

### Rating Criteria

**Below Expectations (-)**:
- Requires significant rework
- Multiple rounds of review needed
- Poor code quality or design
- Incomplete testing
- Lacks documentation
- Breaks existing functionality

**Meeting Expectations (=)**:
- Standard quality
- Normal review process
- Acceptable code quality
- Basic testing included
- Clear purpose and implementation
- Minor feedback addressed

**Exceeding Expectations (+)**:
- Exceptional quality
- Minimal review needed
- Clean, well-structured code
- Comprehensive testing
- Great documentation
- Handles edge cases
- Considers future maintenance

### When to Rate

**Rate PRs When**:
- You've reviewed the PR thoroughly
- It's been merged or closed
- You have enough context to evaluate
- Preparing for performance reviews

**Don't Rate If**:
- You haven't reviewed it
- It's still in draft
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
Below (-):
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

## Organizing PR Results

### Grouping by Repository

PRs are automatically grouped by repository:
- Each repository has a collapsible section
- Shows count: "repo-name (5)"
- Click to expand/collapse

### Collapsing Repositories

1. Click the **arrow icon** next to repository name
2. Repository collapses, hiding its PRs
3. Useful for focusing on specific repos
4. Click again to expand

### PR Counts

- **Total PRs**: Shown at top of results
- **Per Repository**: In repository header
- **Rated vs Unrated**: Visual indicator on each PR

## Viewing PR Details

### PR Card Information

Each PR card shows:
- **Title**: PR name (with rating if rated)
- **Repository and Number**: e.g., "my-repo #123"
- **Rating Lights**: The three-circle selector
- **Notes Field**: If PR is rated

### Opening in GitHub

Click the **PR title** to open in your browser:
- Opens GitHub PR page
- View full conversation
- See code changes
- Check review comments

### Metrics Display

At the bottom of each PR card:
- **Created**: When PR was opened
- **Closed**: When PR was merged/closed
- **Changes**: +additions -deletions
- **Files**: Number of files changed
- **Comments**: Total discussion comments

### Labels

If the PR has GitHub labels:
- They appear as badges
- Help categorize PRs
- Useful for filtering (in your mind)

## Common Workflows

### Weekly PR Review

```
Friday:
1. Select team member
2. Set date range to last 7 days
3. Fetch PRs
4. Rate each PR
5. Add quick notes
6. Repeat for each team member
```

### Monthly Performance Check

```
End of month:
1. Set date range to last 30 days
2. Fetch PRs
3. Review all PRs for patterns
4. Rate and add detailed notes
5. Include in monthly 1-on-1
6. Reference in monthly report
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
7. Use in performance discussion
```

### PR Quality Discussion

```
During 1-on-1:
1. Open PR Review tab
2. Filter to recent PRs
3. Show rated PRs
4. Discuss Below ratings (coaching)
5. Celebrate Exceeding ratings
6. Set goals based on patterns
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
3. **Be Balanced**: Note good and bad
4. **Be Professional**: Focus on work, not person
5. **Be Future-Focused**: Help your future self remember

### Fetching Strategy

1. **Regular Intervals**: Weekly or bi-weekly
2. **Before 1-on-1s**: Always fetch before meetings
3. **Shorter Ranges**: More accurate for recent work
4. **Longer Ranges**: Good for trend analysis
5. **Performance Reviews**: Fetch full review period

### Integration with Other Features

**With Goals**:
- Create goals to improve PR quality
- Track goal progress through PR ratings
- Reference specific PRs in goal milestones

**With Skills**:
- PR ratings support code quality competency
- Use PR notes in skills assessment notes
- Link PR patterns to skill development

**With Feedback**:
- Convert PR observations into feedback
- Reference PRs when giving feedback
- Use PR quality in feedback discussions

## Reporting

PR data appears in reports:

### Individual Reports
- Total PRs in period
- Rating breakdown (Below/Meeting/Exceeding)
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

## Tips and Tricks

1. **Rate While Fresh**: Rate within 24 hours of merge
2. **Use Notes Liberally**: Future you will thank you
3. **Pattern Recognition**: Look for trends in ratings
4. **Celebrate Wins**: Don't just note problems
5. **Quick Ratings**: If unsure, rate Meeting (=) and note why
6. **Batch Processing**: Rate all PRs at once for efficiency
7. **Reference in 1-on-1s**: Share screen, walk through PRs
8. **Track Improvement**: Compare quarters to show growth
9. **Link to Goals**: Reference PRs when discussing goals
10. **Export for Reviews**: Include in performance review docs

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

## Advanced Features

### Date Range Strategies

**Sprint-Based**:
- Align with 2-week sprints
- Fetch at sprint end
- Use for sprint retrospectives

**Month-Based**:
- Calendar month ranges
- Good for monthly check-ins
- Easy to remember and repeat

**Custom Periods**:
- Project-specific dates
- Release cycles
- Incident timeframes

### Rating Calibration

Meet with other managers to:
- Review sample PRs together
- Discuss what each rating means
- Align on standards
- Ensure fairness across teams

### Historical Tracking

While ManagerDash doesn't track changes over time natively:
- Take screenshots of rating summaries
- Export reports quarterly
- Keep notes on improvement trends
- Reference in annual reviews

### Integration with GitHub

The system integrates with GitHub's:
- Pull Request API
- Repository data
- Labels and metadata
- User activity

But does not:
- Modify PRs
- Add comments
- Change labels
- Affect GitHub data

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
- **1, 2, 3**: Quick rate (Below, Meeting, Exceeding)
- **Enter**: Expand/collapse repository
- **Click Title**: Open in GitHub

## Future Enhancements

Consider requesting:
- Filtering by repository
- Sorting by rating
- Comparing periods
- Rating statistics
- Export rating summary