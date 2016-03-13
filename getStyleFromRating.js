/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

import type { StyleObj } from 'StyleSheetTypes';

function getStyleFromRating(score: number): StyleObj {
  if (score < 1000) {
    return styles.noScore;
  }

  var normalizedScore = Math.round(score / 10000);
  return {
    color: 'rgb(' +
      (255) + ', ' +
      165 + ', ' +
      0 +
    ')'
  };
}

var styles = StyleSheet.create({
  noScore: {
    color: '#999999',
  },
});

module.exports = getStyleFromRating;
