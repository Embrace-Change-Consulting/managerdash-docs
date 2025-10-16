---
sidebar_position: 4
id: skills-customization
title: Skills Assessment Setup
description: Customize skill competencies and categories for your organization.
---

This guide explains how to configure and manage skill competencies in ManagerDash. You’ll learn what competencies are, how the default categories work, where to set them up, and how to write effective descriptions that support fair, level-aware evaluations.

## What Are Skill Competencies?

A skill competency is a clearly defined capability you evaluate during a skills assessment. Competencies create a consistent lens for tracking technical ability, collaboration, and professional growth. Examples include Code Review Quality, System Design, Communication, Mentorship, Problem Solving, and Documentation.

Every team brings its own context—tech stacks, collaboration patterns, role expectations, company values, and career frameworks. ManagerDash is designed to adapt to that context so you evaluate what really matters.

### Why Customize Competencies?

Customization helps you assess the skills that drive outcomes on your team, align assessments with company values and role expectations, and skip generic items that don’t apply. With shared definitions, everyone is evaluated against the same criteria, expectations are clearer, comparisons are fairer, and promotion decisions become more consistent and less biased. Custom competencies also make career development more tangible: you can track growth, plan targeted improvements, tie skills to promotion requirements, and celebrate meaningful achievements. Finally, a tailored framework keeps individual growth aligned to team and organizational goals.

## Understanding the Default Categories

ManagerDash ships with three categories—but **no pre-defined competencies**—so you can define what’s right for your organization.

### Output Quality

Work quality and impact: code maintainability, architectural decisions, testing thoroughness, documentation completeness, and attention to detail.

### Team Contribution

Collaboration and team dynamics: effective communication, mentoring and coaching, knowledge sharing, cross-team collaboration, and supportive behaviors.

### Technical Competency

Core technical expertise: system design, problem solving, technology depth, architecture knowledge, and the breadth required for your stack.

These three categories keep assessments balanced: **what** someone produces (Output), **how** they work with others (Team), and **what** they know (Technical). The framework is simple, memorable, and flexible across most engineering teams. You’ll customize it by adding specific competencies within each category.

## Accessing Skill Competency Configuration

1. Open **ManagerDash**.
2. In the left sidebar, select the **Settings** (gear) button at the bottom.
3. Choose **Manage Teams**.
4. In the **Manage Teams** modal, open the **Skill Categories** tab.
   You’ll see your competencies grouped by category.

## Creating Skill Competencies

Select **+ Add Competency** to open the creation form, then complete the fields:

* **Name** (required): keep it short (3–6 words), specific, and actionable. This title appears in assessments (e.g., “Code Review Quality,” “System Design,” “Mentorship”).
* **Category** (required): pick **Output Quality**, **Team Contribution**, or **Technical Competency**. The category organizes competencies and affects radar-chart grouping.
* **Description** (required): define the skill in concrete terms. Describe what proficiency looks like, which behaviors demonstrate it, and how expectations vary by seniority. Clear descriptions improve consistency across reviewers.

Click **Save**. The competency appears under its category and becomes available in skills assessments within a couple of seconds.

### Writing Effective Descriptions

Good descriptions provide a clear definition, observable behaviors, level-specific expectations, concrete examples, and simple guidance on how to rate.

**Example: Code Review Quality**

```
The ability to provide thorough, constructive code reviews that improve 
code quality and help teammates grow.

Observable behaviors:
- Catches bugs and potential issues
- Suggests better approaches and patterns
- Explains reasoning clearly
- Balances thoroughness with timeliness
- Helps others learn through feedback

Expectations by level:
- Early career: Reviews straightforward PRs, asks clarifying questions
- Mid: Provides detailed feedback, catches most issues
- Senior: Mentors through reviews, catches subtle issues, influences team standards
```

## Editing Skill Competencies

Edit competencies to clarify descriptions, add examples, update expectations, or fix typos as your understanding evolves.

1. Go to **Settings → Manage Teams → Skill Categories**.
2. Locate the competency and select the **Edit** (pencil) icon.
3. Update the **Name**, **Category**, or **Description**.

   * Renaming updates all assessments and charts immediately (no data loss), but consider the impact on historical reports.
   * Recategorizing changes grouping in the UI and radar charts without affecting ratings.
   * Updating descriptions is safe and improves consistency.
4. Click **Save**; changes take effect immediately.

## Deleting Skill Competencies

Delete a competency only when it’s no longer relevant, you’re consolidating overlaps, or correcting mistakes. Deletion **removes all historic ratings and notes for that competency** across all team members and **cannot be undone**.

To delete, open **Settings → Manage Teams → Skill Categories**, choose the competency, click **Delete** (trash), review the confirmation details, and confirm. Consider exporting current reports first if you want to preserve history, and communicate the change to your team.

## Organizing Your Competency Framework

Most teams succeed with **8–12 total** competencies. Fewer than six often lacks detail; more than fifteen becomes noisy and time-consuming. Distribute across categories to fit your context:

* **Balanced**: 3–4 per category (9–12 total)
* **Technical-heavy**: 4–6 technical, 2–3 each for output and team (8–12 total)
* **Collaboration-focused**: 4–5 team, 3–4 output, 2–3 technical (9–12 total)

Start with the essentials that drive team success and align with promotion criteria and company values. Add role-specific competencies for unique technologies or processes. Pilot with 6–8 for a quarter, then refine: add where you see gaps and merge or remove overlaps.

## Integration with Seniority Levels

Write descriptions with **level-aware expectations** so a “2 – On track” means “meeting expectations for this level,” regardless of seniority. A shared rating scale remains fair across levels while recognizing that a Senior’s “Outperform” looks different from a Junior’s.

**Example: System Design**

```
Description: Designs scalable, maintainable systems with appropriate 
architecture patterns.

Expectations by Level:
- Early career (JR): Implements designs from others; asks clarifying questions.
- Engineer (ENG): Independently designs medium-complexity features; weighs trade-offs.
- Senior (SR): Designs complex systems; influences team standards; mentors others.
- Staff (STF): Guides multi-team architecture; makes strategic decisions; sets direction.
```

## Best Practices

**Initial setup.** Start simple with 6–8 unambiguous competencies and strong descriptions. Share with peer managers for calibration, pilot with a few assessments, and iterate. Document your framework externally, including rating philosophy and level examples.

**Ongoing management.** Review relevance quarterly, refresh descriptions semi-annually, and perform a deeper annual review. Calibrate regularly with other managers by discussing example ratings and challenging cases. Seek feedback from your team about clarity and coverage, and evolve the framework as your org changes.

**Writing guidance.** Be concrete and behavioral, include level expectations, and keep descriptions readable (ideally under ~200 words). Avoid vague, subjective, or personality-based language and unnecessary jargon.

## Common Patterns

* **Small teams (3–5):** Favor generalist skills, emphasize collaboration, and keep the framework light (6–8 items).
* **Medium teams (6–15):** Expand to 8–12 with some specialization and role-specific competencies.
* **Large teams (15+):** Support sub-specialties, formal promotion criteria, and a standardized framework (10–15).

Team maturity also matters. New teams benefit from a simple, output-and-collaboration-focused start; established teams can maintain a comprehensive, well-documented framework; high-performing teams often add strategic and leadership-oriented competencies.

## Troubleshooting

**Can’t find the Skill Categories tab.**
Open **Settings → Manage Teams** and look for the tab at the top of the modal. It may be labeled “Skill Categories” or “Competencies.” If it’s missing, verify the app version and that the modal has fully loaded.

**Changes aren’t appearing in assessments.**
Allow a couple of seconds for auto-refresh, then try refreshing the app. Confirm your save succeeded and check for error messages. Closing and reopening the modal can help.

**Assessments are empty.**
Create at least one competency in **Settings → Manage Teams → Skill Categories**. Assessments include all defined competencies automatically.

**Deleted an item by mistake.**
Deletions can’t be undone. Recreate the competency with the same name/description; it will reappear in assessments, but historical ratings are lost. Re-evaluate as needed.

**Too many competencies.**
Consolidate overlaps and remove low-value items. Aim back toward the 8–12 range and prioritize clarity over completeness.

## Migration Strategies

If you’re starting from scratch, spend a week drafting a candidate list (10–15), writing descriptions, and getting feedback. In week two, implement 6–8 core items in ManagerDash, test, refine, and then add the rest. Roll out over weeks three and four with documentation, initial ratings, and feedback sessions. In month two, adjust based on usage, add missing items, merge or remove overlaps, and set a regular review cadence.

If you’re replacing a generic framework, document the current state (export assessments), design the new model (what to keep, modify, delete, add), communicate the why and the plan, implement gradually (add new first, remove old last), and re-baseline rather than mapping old ratings to new competencies.

## Examples from Real Organizations

**Tech Startup (Early Stage) — 8 competencies**

```
Output Quality:
- Feature Delivery Speed
- Code Quality
- Product Thinking

Team Contribution:
- Communication
- Collaboration
- Ownership

Technical Competency:
- Full-Stack Ability
- Problem Solving
```

**Mid-Size SaaS — 12 competencies**

```
Output Quality:
- Code Maintainability
- Testing & Quality
- Architecture Decisions
- Documentation

Team Contribution:
- Code Review Quality
- Mentorship
- Cross-Team Collaboration

Technical Competency:
- Backend Systems
- Frontend Development
- Database Design
- DevOps & Infrastructure
- Security Awareness
```

**Enterprise — 15 competencies**

```
Output Quality:
- Solution Design
- Implementation Quality
- Performance & Scalability
- Security Compliance

Team Contribution:
- Technical Leadership
- Mentoring & Coaching
- Stakeholder Management
- Documentation & Knowledge Sharing

Technical Competency:
- System Architecture
- Cloud Technologies
- Data Engineering
- API Design
- Technology Strategy
- Platform Engineering
- DevOps Practices
```

## FAQ

**How many competencies should I start with?**
Begin with 6–8 core items. Add more later as needed.

**Should competencies differ by role (frontend vs backend)?**
Often a unified framework works best, with a handful of role-specific items where necessary.

**Can I change competencies after creating assessments?**
Yes. Changes are immediate. Be cautious with deletions because they remove historic ratings.

**What if a competency is poorly defined?**
Improve the description. Iteration is expected.

**Should descriptions include level expectations?**
Highly recommended for consistency and fairness.

**How often should I update the framework?**
Review quarterly and change only when needed to avoid churn.

**Can I use different categories?**
The three categories are fixed, but what you place inside them is flexible.

**What if team members disagree with the framework?**
Involve them in design and review. Pilot, gather feedback, and iterate.

**Should I share competency descriptions with the team?**
Yes. Transparency improves self-development and review quality.

**How do competencies differ from seniority levels?**
Levels define roles (e.g., Early Career, Senior). Competencies define the skills you evaluate at those levels.

## Summary Checklist

* [ ] Select 6–8 initial competencies and assign categories
* [ ] Write clear names and level-aware descriptions with examples
* [ ] Create competencies in **Settings → Manage Teams → Skill Categories**
* [ ] Pilot an assessment, verify usefulness, and refine
* [ ] Document the framework and align with peer managers
* [ ] Roll out to the team and set a review cadence

## Next Steps

After setup:

1. Create assessments for each person on the **Skills** tab.
2. Rate each competency (0–4), add notes with concrete examples, and review together in 1:1s.
3. Link low-rated competencies to development goals and reassess quarterly to track growth.

See the [Skills Assessment Guide](../4_assessing-skills.md) for detailed usage.

## Additional Resources

**Inspiration**

* Your company’s competency models
* Peer manager frameworks
* Industry career ladders and open-source models (e.g., progression.fyi)

**Related Docs**

* [Skills Assessment Guide](../4_assessing-skills.md)
* [Seniority Levels Setup](./c_customizing.md)
* [Goals & Milestones](../3_goals-and-milestones.md)
