# Commit Convention Guide

## Feature Improvement Commits

When committing feature improvements, follow this convention:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New features or significant improvements
- `fix`: Bug fixes
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `style`: Code style/formatting changes
- `test`: Adding or modifying tests
- `docs`: Documentation changes
- `chore`: Maintenance tasks, dependencies, etc.

### Scope

The scope should be the area of the codebase being modified:

- `auth`: Authentication related changes
- `thread`: Thread functionality
- `comment`: Comment functionality
- `reply`: Reply functionality
- `user`: User management
- `db`: Database changes
- `api`: API endpoints
- `test`: Test infrastructure

### Description

- Use imperative mood ("add" not "added")
- Don't capitalize first letter
- No period at the end
- Keep it concise but descriptive

### Examples

```
feat(thread): add pagination support for thread listing
fix(auth): resolve token expiration handling
perf(db): optimize thread query performance
refactor(comment): simplify comment validation logic
```

### Body (Optional)

Provide detailed description of changes when needed:

```
feat(thread): add thread categorization

Implement thread categories to improve content organization:
- Add category field to threads table
- Update thread creation API to accept category
- Add category filtering in thread listing
```

### Breaking Changes

For breaking changes, add `BREAKING CHANGE:` in the footer:

```
feat(api): update authentication endpoints

BREAKING CHANGE: Authentication endpoints now require API version in URL
```

### Revert Commits

When reverting a commit:

```
revert: feat(thread): add thread categorization

This reverts commit <hash>
```

## Best Practices

1. Keep commits atomic and focused
2. Write clear, concise descriptions
3. Reference issues/tickets when applicable
4. Include context in body when needed
5. Mark breaking changes clearly