import React, { ReactElement, useEffect, useState } from 'react'

const SENTIMENTS = ['Trust', 'Appropriate', 'Original']

interface Props {

}

function SentimentTokenInfo({}: Props): ReactElement {
  let initialScores = {}
  SENTIMENTS.map(sentiment => initialScores[sentiment] = { score: 0 })
  const [scores, setScores] = useState(initialScores)

  const onSentimentThumbClick = (newScore: { sentiment: string, direction: number }) => {
    const { sentiment, direction } = newScore
    let currentScores = scores
    setScores({
      ...currentScores,
      [sentiment]: {
        score: currentScores[sentiment].score + direction
      }
    })
  }

  return (
    <div className='sentiment-token-info'>
      {Object.keys(initialScores).map(sentiment => {
        return (
          <div className='row'>
            <div className='sentiment'>{sentiment}:</div>
              <div className='scores'>
                <i
                  className="feather icon-thumbs-up vote-icon"
                  onClick={() => onSentimentThumbClick({ sentiment, direction: +1 })}
                />
                <div className='score-number'>{scores[sentiment].score}</div>
                <i
                  className="feather icon-thumbs-down vote-icon"
                  onClick={() => onSentimentThumbClick({ sentiment, direction: -1 })}
                />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SentimentTokenInfo
