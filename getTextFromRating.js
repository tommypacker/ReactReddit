
'use strict';

function getTextFromRating(score: number): string {
  return score > 0 ? score + '%' : 'N/A';
}

module.exports = getTextFromRating;
