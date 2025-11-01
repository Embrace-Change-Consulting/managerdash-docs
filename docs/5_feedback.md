---
sidebar_position: 5
title: Feedback Management
---

<img src={require('@site/static/img/app_img/alias_feedback_light.png').default} alt="Feedback Management" style={{float: 'right', marginLeft: '20px', marginBottom: '20px', maxWidth: '400px'}} />

This guide covers how to capture, organize, and manage feedback in ManagerDash.

## Understanding Feedback

Feedback in ManagerDash helps you:
- Track feedback from multiple sources
- Organize feedback by type and visibility
- Prepare for 1-on-1s and performance reviews
- Document positive contributions and growth areas

### Feedback Properties

- **Content**: The feedback text (required)
- **Author**: Who provided the feedback (required)
- **Type**: Positive or Constructive (optional)
- **Visibility**: Private, Team, or Public (optional)
- **Tags**: Comma-separated keywords for organization
- **Status**: Preparing (draft) or Delivered
- **Date**: Automatically tracked (created and updated)

## Adding Feedback

### Quick Add from Home Dashboard

The Home Dashboard provides a fast way to add feedback:

1. From the Home screen, find **"Quick Add Feedback"** panel
2. Select the **Person** from dropdown
3. Choose **Status**:
   - **Preparing (Draft)**: Save for later delivery
   - **Delivered**: Already shared with the person
4. Enter feedback in the **Content** field
5. Click **"Save Feedback"**

### From Individual's Feedback Panel

For more detailed feedback entry:

1. Select the person from the sidebar
2. Click the **Feedback** tab
3. Click **"+ Add Feedback"** button
4. Fill in the form:
   - **Author**: Your name or feedback source
   - **Content**: The feedback text
   - **Type**: Positive, Constructive, or leave blank
   - **Visibility**: Private, Team, Public, or leave blank
   - **Tags**: Comma-separated (e.g., "code review, collaboration")
5. Click **Save**

### From PR Reviews (Automatic)

ManagerDash can automatically generate feedback from your PR reviews:

1. Navigate to a person's **PR Review** tab
2. Review a pull request and evaluate it
3. When marking a PR as **"Feedback Opportunity"**:
   - Feedback is automatically created in draft status
   - Content includes PR title, your review comments, and evaluation
   - Tagged automatically with "PR Review" and the PR number
   - Status set to "Preparing (Draft)" for you to review before delivery
4. Find the auto-generated feedback in:
   - The person's **Feedback** tab
   - Your **Home Dashboard** under "Drafts"
5. Edit the feedback to refine before marking as delivered

**Benefits**:
- Captures specific examples from code reviews
- Links feedback directly to technical work
- Preserves context (PR number, date, comments)
- Streamlines feedback collection workflow

## Editing Feedback

### From Feedback List

1. Navigate to the person's Feedback tab
2. Find the feedback item
3. Click the **pencil icon** on the right
4. The row expands into edit mode
5. Update any fields
6. Click **Save** or **Cancel**

### Keyboard Shortcuts While Editing

- **Esc**: Cancel editing without saving
- **⌘/Ctrl + Enter**: Save changes quickly

### Clicking Outside to Cancel

When editing feedback, clicking outside the edit area automatically cancels and closes the form.

## Organizing Feedback

### Types

**Positive Feedback**:
- Recognizes achievements
- Highlights strengths
- Shows green checkmark icon (✓)
- Use for: accomplishments, growth, exemplary work

**Constructive Feedback**:
- Identifies improvement areas
- Provides developmental guidance
- Shows yellow alert icon (!)
- Use for: areas to develop, coaching points

**No Type**:
- General observations
- Neutral feedback
- Shows gray circle icon

### Visibility Levels

**Private**:
- For your eyes only
- Sensitive or preliminary feedback
- Personal notes for reviews

**Team**:
- Shareable with the team
- Team-visible recognition
- Collaborative feedback

**Public**:
- Broadly shareable
- Company-wide recognition
- Performance review material

**No Visibility Setting**:
- Default state
- Classify later

### Tags

Tags help organize and find feedback:

**Adding Tags**:
- Enter comma-separated values
- Examples: "code review", "presentation", "mentorship"
- Multiple tags per feedback item

**Using Tags**:
- Search by tag to find related feedback
- Group feedback by theme
- Prepare for reviews by topic

## Filtering and Searching

### Show/Hide Filters

Click **"Show Filters"** button to reveal filter controls:

### Search

- **Search Field**: Type to search
- Searches across:
  - Feedback content
  - Author names
  - Tags
- Real-time filtering as you type

### Type Filter

Select from dropdown:
- **All**: Show everything
- **Positive**: Only positive feedback
- **Constructive**: Only constructive feedback

### Visibility Filter

Select from dropdown:
- **All**: Show all visibility levels
- **Private**: Only private feedback
- **Team**: Only team-visible feedback
- **Public**: Only public feedback

### Sort Order

- **Newest First**: Most recent at top (default)
- **Oldest First**: Chronological order

### Combine Filters

Use multiple filters together:
- Example: "Positive + Team + Tagged 'presentation'"
- Filters narrow results progressively

## Feedback Status

### Preparing (Drafts)

**Purpose**: Feedback you're still working on

**Uses**:
- Capture thoughts immediately
- Refine before delivery
- Prepare for scheduled 1-on-1s
- Collect examples over time

**Location**: Appears in "Drafts" section on Home Dashboard

**Actions**:
- **Mark Delivered**: Click button to move to delivered
- **Edit**: Refine before delivery
- **Delete**: Remove if no longer relevant

### Delivered

**Purpose**: Feedback you've shared with the person

**Uses**:
- Historical record
- Performance review preparation
- Track patterns over time
- Document conversations

**Location**: Appears in "Recent Feedback" on Home Dashboard and in Feedback tab

## Deleting Feedback

**⚠️ Warning**: Deletion is permanent and cannot be undone.

1. Click the pencil icon to edit
2. Click the **Delete** button (red)
3. Confirm in the dialog

## Best Practices

### Capturing Feedback

1. **Capture Immediately**: Add feedback when it happens
2. **Be Specific**: Include concrete examples
3. **Use Drafts**: Save partial feedback to complete later
4. **Tag Consistently**: Develop a tagging system and stick to it
5. **Note Source**: Always fill in Author field

### Writing Feedback

**Positive Feedback**:
- Be specific about what was done well
- Explain the impact
- Link to values or competencies
- Example: "Your code review on PR #123 caught a critical bug and suggested a cleaner approach"

**Constructive Feedback**:
- Focus on behaviors, not personality
- Be actionable
- Provide context
- Example: "In the design meeting, jumping to solutions before understanding requirements led to rework"

### Organization

1. **Tag Strategy**: Create categories like:
   - Technical: "code", "architecture", "testing"
   - Soft Skills: "communication", "collaboration", "leadership"
   - Projects: "project-x", "migration", "launch"

2. **Visibility Guidelines**:
   - Private: Initial thoughts, sensitive items
   - Team: Shared achievements, team feedback
   - Public: Major accomplishments, promotion material

3. **Regular Reviews**:
   - Weekly: Mark drafts as delivered
   - Monthly: Review and tag untagged feedback
   - Quarterly: Use for performance discussions

### Integration with Other Features

**With PR Reviews**:
- Mark PRs as "Feedback Opportunity" to auto-generate feedback
- Auto-generated feedback includes PR context and your comments
- Feedback tagged with "PR Review" and PR number
- Review and refine auto-generated feedback before delivery
- Provides concrete examples for technical feedback

**With Goals**:
- Reference feedback when setting goals
- Link feedback tags to goal areas
- Use feedback as evidence of progress

**With Skills**:
- Support skill ratings with feedback examples
- Add feedback to skills assessment notes
- Track skill development through feedback patterns

**In Reports**:
- Feedback automatically included in reports
- Filter by date range
- Export for performance reviews

## Common Workflows

### Weekly Feedback Capture

```
Monday: Review last week's work
Monday: Add positive feedback as drafts
Tuesday-Thursday: Add feedback as events happen
Friday: Mark drafts as delivered after 1-on-1s
Friday: Review and tag all week's feedback
```

### Performance Review Prep

```
2 weeks before: Filter by person and date range
2 weeks before: Review all feedback
1 week before: Group by competency/theme
1 week before: Select key examples for review
During review: Reference specific feedback items
After review: Add new feedback from discussion
```

### 1-on-1 Preparation

```
Day before: Review person's drafts
Day before: Mark most important for discussion
During meeting: Pull up feedback tab
During meeting: Mark drafts as delivered
After meeting: Add any new feedback from discussion
```

### Team Recognition

```
1. Capture positive feedback with "Team" visibility
2. Add tags like "recognition", "achievement"
3. Use in team meetings to call out wins
4. Reference in team reports
5. Share in team channels
```

## Tips and Tricks

1. **Quick Capture**: Use Home Dashboard quick add for speed
2. **Batch Processing**: Review and edit multiple drafts at once
3. **Search Power**: Use tags to find all feedback on a topic
4. **Template Tags**: Develop consistent tags across team
5. **Weekly Ritual**: Set aside time each week to capture feedback
6. **Draft Everything**: When in doubt, save as draft
7. **Be Prompt**: Capture within 24 hours while details are fresh
8. **Edit Later**: Quick capture now, refine wording later
9. **Use Filters**: Prepare for meetings by filtering to relevant feedback
10. **Export Reports**: Generate comprehensive feedback summaries

## Common Issues

### Can't Find Recent Feedback
**Problem**: Feedback not showing in list
**Solution**: 
- Check filters - may be filtered out
- Try "Show All" filters
- Verify correct person is selected

### Search Not Working
**Problem**: Search doesn't find expected feedback
**Solution**:
- Check spelling
- Search is case-insensitive
- Make sure filters aren't excluding results
- Try searching by tag instead

### Edit Form Won't Close
**Problem**: Stuck in edit mode
**Solution**:
- Press Esc key
- Click outside the form area
- Refresh the page if necessary

### Drafts Not Showing
**Problem**: Can't find draft feedback
**Solution**:
- Check Home Dashboard "Drafts" section
- Verify status is "Preparing" not "Delivered"
- Check the individual's Feedback tab

### Auto-Save Not Working
**Problem**: Changes aren't saving
**Solution**:
- Wait for "Saved" indicator
- Check internet connection (even though it's local)
- Try refreshing and re-entering

## Advanced Features

### Bulk Tagging Strategy

Create a tagging taxonomy:
- **Skills**: Technical, leadership, communication
- **Values**: Collaboration, innovation, quality
- **Projects**: By project name or code
- **Time**: Q1, Q2, H1, Annual
- **Type**: Win, learning, blocker

### Feedback Patterns

Look for patterns over time:
- Recurring themes in positive feedback = strengths
- Recurring themes in constructive = development areas
- Changes in frequency = engagement or concern
- Tag trends = skill development or project focus

### Integration with External Tools

While ManagerDash stores feedback locally:
- Export reports for inclusion in HR systems
- Screenshot feedback for sharing in other tools
- Use as source for performance review documents

### Privacy and Sensitivity

Best practices for sensitive feedback:
- Use "Private" visibility for sensitive items
- Be professional in all feedback language
- Remember all feedback is stored locally on your machine
- Export sensitive data carefully

## Keyboard Shortcuts

- **Tab**: Navigate between fields in forms
- **Enter**: Submit form (when focused on submit button)
- **Esc**: Cancel editing
- **⌘/Ctrl + Enter**: Quick save while editing
