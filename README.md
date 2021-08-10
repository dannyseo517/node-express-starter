## Quetion 1 - worm up
Remove duplicate words in a string
Example 1:
input - 'test test hello test nice'
output - 'test hello nice'

Assumptions
* word is separated by a single space

## Question 2
Parse the array of JSON objects and reorder them based on the prority flag
For example, in this ticketing system, there can be a ticket inside a ticket
[
  {
    id: 1,
    priority: 'low',
    linked_issues: [
      {
        id: 250,
        priority: 'low',
        linked_issues: [
          {
            id: 520,
            priority: 'low'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    priority: 'low',
    linked_issues: [
      {
        id: 255,
        priority: 'low',
        linked_issues: [
          {
            id: 525,
            priority: 'high'
          }
        ]
      }
    ],
  }
]

In this case, it should return [{ id: 2 ... , id: 1 ... }] because there was a linked issue in id 2 that had a high priority flag (id: 525)

Assumptions
* key "linked_issues" is always nested or null if it doesn't exist
* There is no set a mount of nesting but can assume nesting can be up to 100 levels deep

