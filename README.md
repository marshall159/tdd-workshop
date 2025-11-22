# 📊 TDD Challenge: Sentiment Analysis API

## The Goal
Build an API that reads sentiment data and filters it by Business Unit.

**Core Requirement:**
Create an endpoint that returns all sentiment records for a specific Business Unit ID.

## The Data (`combined_overview_sentiment.json`)

```json
[
  {
    "businessUnitId": "50feb3bb0000640005212688",
    "sentimentLabel": "Negative",
    "reviewCount": 145,
    "sentimentRatio": 0.68,
    "topic": "credibility"
  },
  {
    "businessUnitId": "50feb3bb0000640005212688",
    "sentimentLabel": "Neutral",
    "reviewCount": 20,
    "sentimentRatio": 0.09,
    "topic": "credibility"
  },
  {
    "businessUnitId": "50feb3bb0000640005212688",
    "sentimentLabel": "Positive",
    "reviewCount": 49,
    "sentimentRatio": 0.23,
    "topic": "credibility"
  },
  {
    "businessUnitId": "50feb403000064000521268c",
    "sentimentLabel": "Negative",
    "reviewCount": 55,
    "sentimentRatio": 0.56,
    "topic": "credibility"
  },
  ...
]

## Milestone 1: Core Retrieval
**Goal:** Fetch data by Business Unit ID.

**Endpoint:** `GET /sentiment/:businessUnitId`

## Milestone 2: Aggregation
**Goal:** Provide a summary view.

**Endpoint:** `GET /sentiment/:businessUnitId/summary`

**Expected Output Format:**

```json
{
  "businessUnitId": "50feb3bb0000640005212688",
  "totalReviews": 214,
  "topics": {
    "credibility": {
      "breakdown": { "positive": 49, "neutral": 20, "negative": 145 }
    }
  }
}
```