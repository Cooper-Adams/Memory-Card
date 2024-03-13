# Dokkan Memory Cards

[Live Preview Here](https://cooper-adams.github.io/Memory-Card/)

### Important Information

The memory card game is a part of [The Odin Project's react curriculum](https://www.theodinproject.com/lessons/node-path-react-new-memory-card#project-solution).

The guidelines for this project wanted us to pull images from an API, but like most other project submissions, I decided to freestyle. The images and music in this project come from the mobile game Dragon Ball Z: Dokkan Battle, and I do not own or claim to own any image or song used here. This is a personal project only for developing my skills, and I will not profit from the use of these assets. If you are part of Bandai or affiliated with the game, please contact me if this is an issue and I will remove it. If not, please support and play the official game in whichever app store you use. The background image originates from the game but was rendered by [June Reito](https://www.deviantart.com/junereito/art/DOKKAN-BATTLE-stylized-background-852509936) on DeviantArt.

### Game Information

In Dokkan Memory Cards, your goal is to advance through sagas by selecting unique cards in each round. There are 5 different game modes, with each having unique cards. If you click the same card twice, you lose! If you make it all the way to the end of a mode, you can then bask in your own glory or select a different mode to play.

##### All Sagas
Every saga in the story of Dragon Ball is here in chronological order (give or take some movie positioning).

##### Dragon Ball Z Sagas
The sagas of the famed Dragon Ball Z are here, including the movies "Battle of Gods" and "Resurrection 'F'".

##### Dragon Ball Super Sagas
The sagas of the newer Dragon Ball Super are here, which also take the final two Dragon Ball Z movies, as they were rehashed in the beginning of the animated series.

##### Dragon Ball GT Sagas
The sagas of the shortest Dragon Ball series, GT, are here.

##### Dragon Ball Movies
The sagas of every movie from Dragon Ball to Super are here (excluding a few of the original's as well as the GT movie as there were not enough cards to fill them out).

### Reflections

In this project, I was able to sharpen my ability to manipulate states through user interaction, as well as exposing myself to useEffects. In particular with the useEffect, I struggled at first in relying on it, as I wanted to write my own functions to maintain bits and pieces of information in the app, but eventually I realized that it was highly inefficient when I could just slide it into a useEffect and have it update with a conditon rather than me attempting to catch all possible update conditions myself.

An issue I struggled with mightily in this project was the shuffling of the cards. In the final version, I conceded and used the shuffle from Lodash, which is effectively just the Fisher-Yates Algorithm. I had no problem implementing the shuffle through Lodash or by my own written version, but I realized that in Strict Mode, React will run your functions twice, which solves its own plethora of problems, and I do not know enough about these problems to be comfortable running the app outside of Strict Mode. For me, and by the looks of many other user submissions, this can cause an "issue" when shuffling the cards, as shuffling a deck once would give you a new order, but when that new order is shuffled, theres a chance that 1/2/or all of the cards would end up back in their original spots, which by the user's viewing, the order would not have changed once they clicked a card. I feel like this is especially prevalent in my submission, as each round only has 4 cards on the screen. Looking at other people's games, I notice it is a whole lot less likely the more cards/images/etc. you have on screen to be shuffled. This is a flaw in my game that I do not like, but my idea to fix it would involve 2 extra states to keep track of the original order before the click, and how many times it has shuffled since it was clicked. I think this would just add clutter to the game component, so I have decided not to work on this problem for now, but I will likely come back and give it another go in the near future.

There are probably way too many music files, but there are so many good OSTs in the game that I decided to just add one for each saga. It is definitely not efficient for space though. I think the music switch probably needs to be changed to actaully pause it rather than just muting it as well, which I assume would help when it loads multiple in a row in a short amount of time.

In the end, I am happy with how it turned out. I think it is visually appealing if you have played or watched any Dragon Ball content, and the music adds to each round.