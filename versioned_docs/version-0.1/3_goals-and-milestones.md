---
sidebar_position: 3
title: Goals and Milestones
---

This guide covers how to create, manage, and track goals and milestones in ManagerDash.

## Understanding Goals

Goals represent high-level objectives for individuals or teams. Each goal can have multiple milestones to track progress.

### Goal Properties

- **Title**: Clear, concise name for the goal (required)
- **Description**: Detailed explanation of the goal
- **Status**: Current state (Planned, In Progress, Done, Blocked, Archived)
- **Start Date**: When work begins
- **Target Date**: When the goal should be completed
- **Milestones**: Trackable sub-tasks or checkpoints

## Creating a Goal

### For an Individual

1. Select the person from the sidebar
2. Click the **Goals** tab in the top navigation
3. Click **"+ New Goal"** button
4. Fill in the goal form:
   - **Title**: Enter the goal name (required)
   - **Description**: Add context and details
   - **Status**: Select initial status (default: Planned)
   - **Start Date**: Choose when to begin
   - **Target Date**: Set the deadline
5. Click **Save**

### For a Team

1. Select the team from the sidebar
2. Click the **Goals** tab
3. Follow the same process as individual goals
4. Team goals appear on the team dashboard

## Editing a Goal

1. Navigate to the Goals tab
2. Click the **edit icon** (pencil) on the goal card
3. Update any fields
4. Click **Save** to confirm changes

## Goal Status

### Available Statuses

- **Planned**: Goal is defined but work hasn't started
- **In Progress**: Active work is happening
- **Done**: Goal has been completed
- **Blocked**: Progress is stopped by dependencies or issues
- **Archived**: Goal is no longer active (removed from main view)

### Changing Status

1. Click the edit icon on the goal
2. Select new status from the dropdown
3. Save the change

## Milestones

Milestones break down goals into smaller, trackable units.

### Creating a Milestone

1. Expand a goal (it should not be collapsed)
2. In the milestones section, click **"+ Add Milestone"**
3. Fill in the milestone form:
   - **Title**: Name of the milestone (required)
   - **Description**: Additional context
   - **Status**: Not Started, In Progress, Completed, Blocked
   - **Target Date**: Optional deadline
4. Click **Save**

### Milestone Properties

- **Title**: What needs to be accomplished
- **Description**: Details and acceptance criteria
- **Status**: Current state
- **Target Date**: When it should be completed
- **Last Updated**: Automatically tracked

### Milestone Status Options

- **Not Started**: Hasn't begun yet (○)
- **In Progress**: Currently being worked on (⧗)
- **Completed**: Finished (✓)
- **Blocked**: Cannot proceed (✗)

### Editing a Milestone

1. Click the **edit icon** next to the milestone
2. Update fields
3. Click **Save**

### Deleting a Milestone

1. Click the **delete icon** (trash) next to the milestone
2. Confirm deletion in the dialog

## Progress Tracking

### Goal Progress Bar

When a goal has milestones:
- A progress bar shows completion percentage
- Calculated as: (Completed Milestones / Total Milestones) × 100%
- Updates automatically when milestone status changes

### Visual Indicators

**Collapsed Goal View**:
- Status badges with color coding
- Milestone summary counts
- Quick view of completion ratio

**Expanded Goal View**:
- Full milestone list
- Individual milestone status icons
- Target dates for each milestone

### Milestone Statistics

When goals are collapsed, you see:
- ✓ Completed count (green)
- ⧗ In Progress count (blue)
- ✗ Blocked count (red)
- ○ Not Started count (gray)
- Overall ratio (e.g., "3/5")

## Reordering Goals

You can drag and drop to reorder goals:

1. Click and hold the **drag handle** (⋮⋮) on a goal card
2. Drag to the desired position
3. Release to drop
4. Order is saved automatically

This helps you prioritize by putting most important goals at the top.

## Collapsing/Expanding Goals

### Collapsing a Goal

Click the **chevron icon** (▼) next to the goal title to collapse:
- Hides milestone details
- Shows milestone summary statistics
- Saves screen space

### Expanding a Goal

Click the **chevron icon** (▶) to expand:
- Shows all milestones
- Displays full details
- Allows editing milestones

## Archiving Goals

### Why Archive?

Archive goals that are:
- Completed and no longer need tracking
- Cancelled or deprioritized
- Historical records you want to keep

### How to Archive

1. Click the **edit icon** on the goal
2. Change status to **Archived**
3. Save the change

### Viewing Archived Goals

1. Go to the Goals tab
2. Click **"View Archived"** button
3. See all archived goals
4. Click **"View Active"** to return

### Restoring an Archived Goal

1. View archived goals
2. Click edit on the archived goal
3. Change status to any active status (e.g., Planned)
4. Save to restore to active view

## Deleting Goals

**⚠️ Warning**: Deleting a goal permanently removes it and all associated milestones. This cannot be undone.

1. Click the **delete icon** (trash) on the goal card
2. Read the confirmation dialog
3. Click **Delete** to confirm
4. Goal and all milestones are removed

## Best Practices

### Goal Setting

1. **Be Specific**: Use clear, measurable goal titles
2. **Set Deadlines**: Always include target dates
3. **Break It Down**: Create milestones for complex goals
4. **Review Regularly**: Update status weekly
5. **Keep Current**: Archive completed or cancelled goals

### Milestone Management

1. **Bite-Sized Tasks**: Each milestone should be achievable in 1-2 weeks
2. **Clear Criteria**: Description should define "done"
3. **Ordered Progression**: Arrange milestones in logical sequence
4. **Track Blockers**: Use Blocked status to highlight issues
5. **Update Promptly**: Mark completed milestones immediately

### Team Goals

1. **Collective Ownership**: Ensure entire team understands the goal
2. **Clear Responsibilities**: Note who owns each milestone
3. **Regular Check-ins**: Discuss in team meetings
4. **Celebrate Wins**: Acknowledge milestone completions

### Individual Goals

1. **Align with Team**: Connect to team objectives
2. **Career Development**: Include growth-focused goals
3. **Balanced Mix**: Combine technical and soft skill goals
4. **Regular 1-on-1s**: Review progress in meetings

## Common Use Cases

### Quarterly Objectives

```
Goal: "Ship New Dashboard Feature"
├─ Milestone: Complete design review
├─ Milestone: Implement frontend components
├─ Milestone: Build backend API
├─ Milestone: Write tests
└─ Milestone: Deploy to production
```

### Career Development

```
Goal: "Improve Technical Leadership"
├─ Milestone: Lead 2 design reviews
├─ Milestone: Mentor junior engineer
├─ Milestone: Present at team tech talk
└─ Milestone: Document architecture decisions
```

### Project Delivery

```
Goal: "Launch Mobile App v2.0"
├─ Milestone: Feature freeze (June 1)
├─ Milestone: Beta testing complete (June 15)
├─ Milestone: Fix critical bugs (June 25)
└─ Milestone: Production release (July 1)
```

## Reporting

Goals and milestones appear in:
- **Individual Reports**: Personal achievement summaries
- **Team Reports**: Collective progress overview
- **Markdown Exports**: Detailed goal breakdowns with progress metrics

Reports show:
- Goal status and dates
- Milestone completion percentage
- Completed vs. total milestones
- Individual milestone status with completion dates

## Tips and Tricks

1. **Quick Status Update**: Click edit, change status dropdown, save—takes 5 seconds
2. **Keyboard Navigation**: Use Tab to move between form fields quickly
3. **Drag to Prioritize**: Reorder goals to reflect current priorities
4. **Collapse for Overview**: Collapse all goals to see high-level progress
5. **Milestone Naming**: Use action verbs (Complete, Implement, Review, Deploy)
6. **Target Dates**: Set realistic dates with buffer time
7. **Status Synchronization**: When all milestones are completed, update goal to Done
8. **Archive Regularly**: Keep active list clean by archiving old goals

## Common Issues

### Can't See Milestones
**Problem**: Milestones section is empty
**Solution**: Make sure the goal is expanded (click chevron icon)

### Progress Not Updating
**Problem**: Completed milestones but percentage unchanged
**Solution**: Refresh the page or wait a moment for auto-update

### Can't Delete Goal
**Problem**: Delete button doesn't work
**Solution**: Ensure you're not in edit mode; close the edit form first

### Lost Goal Order
**Problem**: Goals returned to default order
**Solution**: Reordering is saved immediately; this shouldn't happen. Try refreshing.

## Keyboard Shortcuts

When editing goals or milestones:
- **Esc**: Cancel editing without saving
- **⌘/Ctrl + Enter**: Save changes (in milestone description)
- **Tab**: Move to next field
- **Shift + Tab**: Move to previous field

