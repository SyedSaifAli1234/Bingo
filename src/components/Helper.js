const texts = [
    'We cannot hear you', 'Can you hear me?', 'I hear background noise',
    'I\'m late', 'Need to run to next meeting', 'Is Ryan here?',
    'Can you see my screen?', 'Who can share the screen?', 'Let me share my screen',
    'Client is asking for a demo', 'Connection issues', 'Can you repeat please?',
    'Any blockers?', 'Tomorrow I will have day off', 'Who can help me with this problem?',
    'We will need more time for this', 'Is boarding complete?', 'Let\'s close the call',
    'We are running late', 'No updates from my side', 'Please mute yourself',
    'We need to speed-up a bit', 'Still working on the styling', 'Let\'s discuss it offline', 'I\'ve sent you a mail'
    ,'Child noises in the background', 'Hello, hello?','Can everyone go on mute','Could you please get closer to the mic','Can we take this offline'
];


export const getData = (gridSize) => {
    texts.sort((a, b) => 0.5 - Math.random());
    const cards = [];
    let textCount = 0;
    let totalTexts = Math.floor(texts.length/gridSize);
    for(let i=0;i<totalTexts;i++) {
        const cells = [];
        for(let j=0;j<gridSize;j++) {
            const cell = {
                id: textCount,
                text: texts[textCount++],
                selected: false,
                cellColor: 'bg-white bg-opacity-50',
                clickable: false,
                render: textCount <= gridSize * gridSize
            }
            cells.push(cell);
        }
        cards.push(cells);
    }
    const middleIndex = Math.floor(gridSize/2);
    cards[middleIndex][middleIndex].selected = true;
    cards[middleIndex][middleIndex].cellColor = "bg-info bg-opacity-25";
    cards[middleIndex][middleIndex].text = "Conf call bingo";
    return cards;
}
