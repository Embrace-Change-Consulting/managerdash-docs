---
sidebar_position: 2
title: Configuring your team
---

# Teams and People Management

This guide covers how to add, organize, and manage teams and individuals in ManagerDash.

## Understanding Aliases

In ManagerDash, individuals are called "Aliases". Each alias represents a person you manage or work with.

### Alias Properties

- **Name**: Full name of the person (required)
- **GitHub Handle**: GitHub username (required for PR integration)
- **Initials**: 2-3 letter abbreviation (optional, auto-generated if not provided)
- **Color**: Visual identifier used throughout the app
- **Seniority Level**: Optional classification (e.g., E1, E5, L6). This is customizable. See 

## Adding a Person

### From the Sidebar

1. Click the **"+ Add Alias"** button in the sidebar
2. Fill in the form:
   - **Name**: Enter the person's full name
   - **Initials**: (Optional) Enter 2-3 letters
   - **GitHub Handle**: Enter their GitHub username (with or without @)
   - **Color**: Click the color picker to choose a color
   - **Seniority Level**: Select from dropdown (optional)
3. Click **Save**

### From the Home Dashboard

If no people exist yet:
1. You'll see an empty state prompt
2. Click **"Add Your First Person"**
3. Fill in the inline form
4. Click **Save**

## Editing a Person

### From the Sidebar

1. Hover over the person's name in the sidebar
2. Click the **three-dot menu** (⋮)
3. Select **Edit**
4. Update the fields in the inline form
5. Click **Save** or **Cancel**

### What You Can Edit

- Name
- GitHub handle
- Initials
- Color
- Seniority level
- Team assignment (via drag-and-drop)

## Deleting a Person

**⚠️ Warning**: Deleting a person removes all associated data including goals, skills assessments, feedback, and PR evaluations. This action cannot be undone.

1. Click the three-dot menu (⋮) next to their name
2. Select **Delete**
3. Confirm the deletion in the dialog

## Teams

Teams help you organize people into logical groups.

### Creating a Team

1. Click **"+ Add Team"** in the sidebar
2. Enter:
   - **Team Name**: Required (must be unique)
   - **Description**: Optional
3. Click **Save**

### Assigning People to Teams

Use drag-and-drop to assign people:

1. Click and hold on a person's name
2. Drag them to the desired team
3. Release to assign
4. The assignment is saved automatically

### Unassigning from a Team

1. Click and hold on the person's name
2. Drag them to the **"Unassigned"** section
3. Release to remove from team

### Viewing Teams

**Expanded Sidebar:**
- Teams show as expandable cards
- Click team name to view team dashboard
- See all team members listed below

**Collapsed Sidebar:**
- Teams show as compact cards
- Team members appear as colored circles with initials
- Click to expand and see details

## Sidebar Navigation

### Collapsing/Expanding

- Click the **arrow icon** in the top-right of the sidebar
- Collapsed view shows icons and initials only
- Expanded view shows full names and details

### Sidebar Sections

1. **Action Buttons**: Add Team and Add Alias
2. **Teams**: All teams with their members
3. **Unassigned**: People not on any team
4. **Settings**: At the bottom (Preferences, Manage Teams, Export Data)

## Team Dashboard

When you select a team, you see:

### Top Navigation
- **Goals Tab**: Team-wide goals
- **Skills Tab**: Aggregated team skills view
- **Report Tab**: Team performance report

### Features
- Track team-level objectives
- Compare skills across team members
- Generate team reports

## Individual Dashboard

When you select a person, you see:

### Top Navigation
- **Goals Tab**: Individual goals
- **Skills Tab**: Skills assessment
- **PR Review Tab**: GitHub pull requests
- **Feedback Tab**: Feedback history
- **Report Tab**: Individual performance report

### Features
- Complete personal development tracking
- PR quality evaluation
- 360° feedback collection
- Comprehensive reporting

## Best Practices

### Naming Conventions
- Use consistent naming (e.g., "First Last")
- Keep initials short and clear
- Choose distinct colors for easy identification

### GitHub Integration
- Always add GitHub handles for developers
- Use the exact GitHub username (case doesn't matter)
- Test by fetching PRs after adding

### Team Organization
- Create teams that match your org structure
- Keep team sizes manageable (5-10 people)
- Use descriptive team names

### Regular Maintenance
- Update seniority levels as people grow
- Remove inactive team members
- Reorganize teams as your org changes

## Seniority Levels

Seniority levels help categorize experience and expectations.

### Setting Up Levels

Go to Settings → Manage Teams to configure:
- **Code**: Short identifier (e.g., "JR", "SR")
- **Title**: Full title (e.g., "Early Career Engineer")
- **Description**: Role expectations

### Assigning Levels
- Assign when creating or editing a person
- Used in skills assessment for context
- Appears in reports

## Common Issues

### Duplicate GitHub Handle Error
**Problem**: "An alias with this GitHub handle already exists"
**Solution**: Each GitHub handle must be unique. Check existing people or use a different handle.

### Team Name Conflict
**Problem**: "A team with this name already exists"
**Solution**: Choose a different team name (case-insensitive check).

### Can't See Person After Adding
**Problem**: New person doesn't appear
**Solution**: Check the "Unassigned" section at the bottom of the sidebar.

### Drag and Drop Not Working
**Problem**: Can't move person to team
**Solution**: 
- Make sure you're dragging from the drag handle icon
- Ensure sidebar is expanded
- Try refreshing the app

## Tips

1. **Use Colors Strategically**: Assign similar colors to team members for quick visual grouping
2. **Initials Display**: In collapsed view, initials help identify people quickly
3. **Quick Access**: Recently selected people/teams are easier to access
4. **Keyboard Navigation**: Use Tab to navigate through forms quickly
5. **Bulk Setup**: If adding many people, keep the form open and save repeatedly
