---
sidebar_position: 3
id: customization
title: Seniority Levels Setup
description: Customize career levels and descriptions for your organization.
---
This guide provides detailed instructions for configuring and managing seniority levels in ManagerDash.

## What Are Seniority Levels?

Seniority levels help you classify team members by experience, responsibility, and expectations. They provide context for:

- Skills assessments (expectations vary by level)
- Goal setting (appropriate complexity)
- Performance evaluations (level-appropriate standards)
- Career progression tracking
- Team composition analysis

**Examples:**
- Junior Engineer → Senior Engineer → Staff Engineer
- IC1 → IC2 → IC3 → IC4
- Developer → Senior Developer → Lead Developer → Principal

## Why Use Seniority Levels?

### Benefits

**Contextual Assessment:**
- Skills ratings make more sense with level context
- "On track" for Junior ≠ "On track" for Senior
- Compare people at same level fairly

**Career Development:**
- Track progression between levels
- Set level-appropriate goals
- Plan promotions with clear criteria
- Document growth over time

**Team Analysis:**
- Understand team composition
- Identify level imbalances
- Plan hiring needs
- Balance experience distribution

**Reporting:**
- Include level in reports
- Filter/group by seniority
- Track promotion timelines
- Show career progression

## Accessing Seniority Level Configuration

### Step 1: Open Settings

1. Launch ManagerDash
2. Look at the bottom of the left sidebar
3. Click the **Settings** (gear icon) button
4. Click **Manage Teams** from the dropdown menu

### Step 2: Navigate to Seniority Levels

1. The Manage Teams modal opens
2. Look for tabs or sections at the top
3. Find and click **Seniority Levels** tab/section
4. You'll see a list of existing levels (if any)

## Creating Seniority Levels

### Basic Setup

**Step 1: Click Add Button**
- Look for **"+ Add Seniority Level"** or similar button
- Click it to open the creation form

**Step 2: Fill in Required Fields**

**Code** (required):
- Short identifier (2-4 characters)
- Examples: "JR", "SR", "STF", "IC3"
- Used in compact views
- Keep it simple and clear

**Title** (required):
- Full level name
- Examples: "Junior Engineer", "Senior Engineer"
- What you'll see most often
- Be specific and descriptive

**Description** (optional but recommended):
- Detailed explanation of level
- Responsibilities and expectations
- Skills typically demonstrated
- Experience range
- Helps with consistent leveling

**Step 3: Save**
- Click **Save** or **Add** button
- Level appears in the list
- Now available when adding/editing people

### Example Configurations

#### Software Engineering Ladder

**Level 1: Junior Engineer**
```
Code: JR
Title: Junior Engineer
Description: Early career engineer (0-2 years). Learning fundamentals, 
requires regular guidance. Focuses on well-defined tasks. Building 
technical foundation and professional skills.
```

**Level 2: Engineer**
```
Code: ENG
Title: Engineer
Description: Mid-level engineer (2-5 years). Works independently on 
defined projects. Solid technical fundamentals. Contributes to code 
reviews and team discussions. Occasional mentoring of junior engineers.
```

**Level 3: Senior Engineer**
```
Code: SR
Title: Senior Engineer
Description: Experienced engineer (5-8 years). Leads medium to large 
projects. Strong technical decision-making. Mentors others regularly. 
Influences team practices and standards. Handles ambiguous problems.
```

**Level 4: Staff Engineer**
```
Code: STF
Title: Staff Engineer
Description: Expert engineer (8+ years). Drives technical strategy across 
multiple teams. Solves complex, ambiguous problems. Significant influence 
on architecture and technical direction. Coaches and develops other 
engineers.
```

**Level 5: Principal Engineer**
```
Code: PRI
Title: Principal Engineer
Description: Senior technical leader (12+ years). Sets technical vision 
for organization. Solves company-wide technical challenges. Develops other 
senior engineers. Industry expert and thought leader.
```

#### IC Track Framework

**Level 1:**
```
Code: IC1
Title: Individual Contributor Level 1
Description: Entry level. Requires close guidance. Executes on clearly 
defined tasks. Learning core skills and company practices.
```

**Level 2:**
```
Code: IC2
Title: Individual Contributor Level 2
Description: Developing proficiency. Works independently on routine tasks. 
Requires guidance on complex problems. Beginning to contribute ideas.
```

**Level 3:**
```
Code: IC3
Title: Individual Contributor Level 3
Description: Fully proficient. Independent on most tasks. Occasional 
guidance on novel problems. Mentors IC1/IC2. Strong technical contributor.
```

**Level 4:**
```
Code: IC4
Title: Individual Contributor Level 4
Description: Expert level. Leads projects and influences team direction. 
Handles ambiguity well. Develops others. Key technical decision-maker.
```

**Level 5:**
```
Code: IC5
Title: Individual Contributor Level 5
Description: Domain expert. Multi-team impact. Strategic technical 
influence. Develops senior ICs. Sets standards and direction.
```

#### Simplified Three-Tier

**Junior:**
```
Code: JUN
Title: Junior Developer
Description: 0-3 years experience. Learning phase. Requires regular 
guidance. Focuses on skill development and task execution.
```

**Mid:**
```
Code: MID
Title: Mid-Level Developer
Description: 3-7 years experience. Independent contributor. Solid skills. 
Occasional mentoring. Reliable execution on defined projects.
```

**Senior:**
```
Code: SEN
Title: Senior Developer
Description: 7+ years experience. Technical leader. Mentors others. 
Drives projects. Influences team decisions. Handles complex problems.
```

## Editing Seniority Levels

### When to Edit

- Clarifying descriptions
- Updating expectations
- Fixing typos
- Adjusting codes for consistency
- Refining level criteria

### How to Edit

1. Open Settings → Manage Teams → Seniority Levels
2. Find the level you want to edit
3. Click **Edit** icon/button next to it
4. Update the fields:
   - Code (be careful - affects existing aliases)
   - Title (safe to change)
   - Description (safe to change)
5. Click **Save**
6. Changes apply immediately

### Important Considerations

**Changing Codes:**
- Existing people keep their level assignment
- But the code they see updates
- Consider impact on exports/reports
- Update documentation if you have it

**Changing Titles:**
- Safe to do anytime
- Updates everywhere immediately
- More descriptive titles are better

**Updating Descriptions:**
- No impact on functionality
- Makes leveling more consistent
- Good to refine over time

## Deleting Seniority Levels

### When to Delete

- Level no longer used in your org
- Consolidating similar levels
- Simplifying level structure
- Correcting mistakes

### How to Delete

1. Open Settings → Manage Teams → Seniority Levels
2. Find the level to delete
3. Click **Delete** icon/button
4. Confirm deletion if prompted
5. Level is removed

### What Happens to Existing Assignments?

**People currently at this level:**
- They keep their data
- Their seniority level field becomes unset/empty
- You can reassign them to different level
- No other data is affected

**Best Practice:**
1. Before deleting, note who has this level
2. Delete the level
3. Edit each affected person
4. Assign them to appropriate new level

## Assigning Levels to People

### When Adding a New Person

1. Click **"+ Add Alias"** in sidebar
2. Fill in Name, GitHub, etc.
3. Find **Seniority Level** dropdown
4. Select appropriate level (or leave blank)
5. Save

### When Editing Existing Person

1. Find person in sidebar
2. Click three-dot menu (⋮)
3. Click **Edit**
4. Find **Seniority Level** dropdown
5. Change selection
6. Save

### Level Assignment Best Practices

**Be Consistent:**
- Use the same criteria for everyone
- Document your decision-making
- Review assignments periodically
- Get second opinions when uncertain

**Consider Multiple Factors:**
- Years of experience (but not only this)
- Demonstrated skills and impact
- Scope of responsibility
- Autonomy level
- Mentoring and leadership

**Update on Promotions:**
- Change level when promoting
- Document in goals or feedback
- Update immediately after decision
- Celebrate the promotion!

**When Uncertain:**
- Leave blank initially
- Assess during first month
- Discuss with team/peers
- Document reasoning

## Best Practices

### Initial Setup

**Start Simple:**
- Begin with 3-4 levels
- Add more only if needed
- Easier to add than remove
- Can always expand later

**Document Criteria:**
- What does each level mean?
- What are expectations?
- How do you decide?
- Keep documentation external

**Be Consistent with Org:**
- Match company level names if possible
- Align with HR systems
- Use familiar terminology
- Makes reporting easier

**Get Input:**
- Discuss with peer managers
- Review with your manager
- Consider team feedback
- Align across organization

### Ongoing Management

**Regular Reviews:**
- Quarterly: Review assignments
- Annually: Review level definitions
- Update as org evolves
- Refine descriptions

**Calibration Sessions:**
- Meet with other managers
- Discuss level assignments
- Ensure consistency
- Document standards

**Promotion Tracking:**
- Update levels promptly
- Note promotion dates
- Track time-in-level
- Support career planning

**Documentation:**
- Keep level criteria written down
- Share with team (appropriately)
- Use in goal-setting
- Reference in reviews

## Integration with Other Features

### Skills Assessment

**Level Context for Ratings:**
- "On track" means different things at different levels
- Junior at "On track" for basics
- Senior at "On track" for advanced skills
- Set expectations accordingly

**Using Levels:**
- Note level in assessment notes
- Reference in rating decisions
- Compare within same level
- Track growth toward next level

### Goals

**Level-Appropriate Goals:**
- Junior: Learning, execution, foundation
- Mid: Independence, consistency, breadth
- Senior: Leadership, mentoring, strategy

**Promotion Goals:**
- "Demonstrate Senior level skills"
- Link to level descriptions
- Clear criteria from descriptions

### Reports

**In Reports:**
- Level appears with person's name
- Provides context for reader
- Helps explain ratings
- Shows progression

**Filtering:**
- While ManagerDash doesn't filter by level yet
- You can note it in descriptions
- Group manually when needed
- Request feature if valuable

### Feedback

**Level-Aware Feedback:**
- Reference level expectations
- "For a Senior Engineer, expected to..."
- "Great for Junior level"
- "Ready for next level because..."

## Common Patterns

### Career Ladders

**Dual Track:**
```
Individual Contributor Track:
- IC1 → IC2 → IC3 → IC4 → IC5

Management Track:
- M1 → M2 → M3 → M4
```

**Single Track:**
```
Progressive Levels:
- Associate → Engineer → Senior → Staff → Principal
```

**Specialized Tracks:**
```
By Domain:
- Frontend: FE1 → FE2 → FE3
- Backend: BE1 → BE2 → BE3
- Full Stack: FS1 → FS2 → FS3
```

### Naming Conventions

**Numeric:**
- Clear progression
- Easy to understand
- No ambiguity
- Examples: L1, L2, L3 or IC1, IC2, IC3

**Descriptive:**
- Self-explanatory
- No reference needed
- Clear expectations
- Examples: Junior, Senior, Staff

**Hybrid:**
- Best of both
- Clear and numbered
- Examples: "L3 - Senior Engineer"

## Troubleshooting

### Can't Find Seniority Levels Section

**Problem:** Don't see where to manage levels

**Solution:**
1. Check Settings → Manage Teams
2. Look for tabs at top of modal
3. May be labeled "Seniority" or "Levels"
4. If missing, feature may not be available
5. Check app version/updates

### Changes Not Appearing

**Problem:** Updated level but doesn't show

**Solution:**
1. Close and reopen Manage Teams modal
2. Refresh the application
3. Check if save actually succeeded
4. Look for error messages

### Person's Level Not Updating

**Problem:** Changed person's level but still shows old

**Solution:**
1. Verify you clicked Save after editing
2. Refresh the page
3. Check if you edited correct person
4. Try editing again

### Level Dropdown Empty

**Problem:** No levels available when adding person

**Solution:**
1. First create seniority levels in Manage Teams
2. Then add people with levels
3. Can't assign levels that don't exist yet
4. Create at least one level first

## Migration Strategies

### From No Levels to Levels

**Phase 1: Define Levels**
1. Week 1: Define 3-4 core levels
2. Document criteria
3. Get manager alignment
4. Create in ManagerDash

**Phase 2: Assign Levels**
1. Week 2: Assign obvious cases
2. Week 3: Discuss uncertain cases
3. Week 4: Complete assignments
4. Review with team

**Phase 3: Use in Workflows**
1. Month 2: Reference in 1-on-1s
2. Month 2: Use in goal-setting
3. Month 3: Include in reviews
4. Ongoing: Track promotions

### From Old System to New

**If changing level structure:**

1. **Document Current State:**
   - Export reports with current levels
   - Note each person's current level
   - Save for reference

2. **Create New Levels:**
   - Add new level definitions
   - Include mapping from old to new
   - Document differences

3. **Migrate People:**
   - Reassign each person to new level
   - Use your documented mapping
   - Verify each assignment

4. **Clean Up:**
   - Delete old levels (after all migrated)
   - Update documentation
   - Communicate changes to team

## Examples from Real Organizations

### Tech Startup (15 people)

```
JR - Junior Engineer (0-2 years)
EN - Engineer (2-5 years)  
SR - Senior Engineer (5+ years)
```

Simple, clear, works for small team.

### Mid-Size Company (50+ engineers)

```
E1 - Associate Engineer
E2 - Engineer
E3 - Senior Engineer
E4 - Staff Engineer
E5 - Senior Staff Engineer
E6 - Principal Engineer
```

Standard levels, room for growth, clear progression.

### Large Enterprise (100+ engineers)

```
IC1 - Entry Level
IC2 - Junior
IC3 - Intermediate
IC4 - Senior
IC5 - Staff
IC6 - Senior Staff
IC7 - Principal
IC8 - Distinguished Engineer
IC9 - Fellow
```

Detailed ladder, many levels, rare to reach top.

## FAQ

**Q: How many seniority levels should I have?**
A: 3-5 levels work for most teams. More than 7 gets complicated. Start simple.

**Q: Should I use numbers or names?**
A: Either works. Numbers are clearer for progression. Names are more descriptive. Consider hybrid: "L3 - Senior Engineer".

**Q: What if someone is between levels?**
A: Choose the level they're currently at, not aspiring to. Use goals to track path to next level.

**Q: Can I change levels later?**
A: Yes. Edit anytime. Be careful with codes (affects display) but titles/descriptions are safe to change.

**Q: Should levels match our company's official levels?**
A: Ideally yes, for consistency. But if company levels don't fit your team, adapt them. Document your mapping.

**Q: What if we don't have formal levels?**
A: You can still use them in ManagerDash for your own tracking. Keep it simple: Junior/Mid/Senior.

**Q: Do I have to assign levels to everyone?**
A: No, they're optional. But they add valuable context for assessments and goals.

**Q: How do I handle promotions?**
A: When someone is promoted, edit their profile and update their seniority level. Add a goal or feedback item noting the promotion.

**Q: Can I have different levels for different roles (e.g., Frontend vs Backend)?**
A: Yes, but consider if it adds value or complexity. Usually better to have unified levels.

**Q: What if someone doesn't fit any level?**
A: This suggests you need to refine your level definitions or add a level. Use feedback and discussions to figure out why they don't fit.


