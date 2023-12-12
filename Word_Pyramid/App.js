import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function App() {
  const dictTwo = require('./dictionaryTwo.json');
  const dictThree = require('./dictionaryThree.json');
  const dictFour = require('./dictionaryFour.json');
  const dictFive = require('./dictionaryFive.json');

  let [row1count, setRow1Count] = useState(0);
  let [row2count, setRow2Count] = useState(0);
  let [row3count, setRow3Count] = useState(0);
  let [row4count, setRow4Count] = useState(0);
  let [row5count, setRow5Count] = useState(0);

  let [word1, setWord1] = useState(0);
  let [word2, setWord2] = useState(0);
  let [word3, setWord3] = useState(0);
  let [word4, setWord4] = useState(0);
  let [word5, setWord5] = useState(0);

  const [genedLetter, setGenedLetter] = useState(generateRandomLetters);
  const [newLetterCounter, setNewLetterCounter] = useState(10);

  //Disable Buttons
  const [isButtonDisabled1, setButtonDisabled1] = useState(false);
  const [isButtonDisabled2, setButtonDisabled2] = useState(false);
  const [isButtonDisabled3, setButtonDisabled3] = useState(false);
  const [isButtonDisabled4, setButtonDisabled4] = useState(false);
  const [isButtonDisabled5, setButtonDisabled5] = useState(false);
  const [isButtonDisabled6, setButtonDisabled6] = useState(false);
  const [isButtonDisabled7, setButtonDisabled7] = useState(false);
  const [isButtonDisabled8, setButtonDisabled8] = useState(false);
  const [isButtonDisabled9, setButtonDisabled9] = useState(false);
  const [isButtonDisabled10, setButtonDisabled10] = useState(false);
  const [isButtonDisabled11, setButtonDisabled11] = useState(false);
  const [isButtonDisabled12, setButtonDisabled12] = useState(false);
  const [isButtonDisabled13, setButtonDisabled13] = useState(false);
  const [isButtonDisabled14, setButtonDisabled14] = useState(false);
  const [isButtonDisabled15, setButtonDisabled15] = useState(false);
  const [isButtonDisabledRestart, setButtonDisabledRestart] = useState(false);

  const [tile1, setTile1] = useState('');
  const [tile2, setTile2] = useState('');
  const [tile3, setTile3] = useState('');
  const [tile4, setTile4] = useState('');
  const [tile5, setTile5] = useState('');
  const [tile6, setTile6] = useState('');
  const [tile7, setTile7] = useState('');
  const [tile8, setTile8] = useState('');
  const [tile9, setTile9] = useState('');
  const [tile10, setTile10] = useState('');
  const [tile11, setTile11] = useState('');
  const [tile12, setTile12] = useState('');
  const [tile13, setTile13] = useState('');
  const [tile14, setTile14] = useState('');
  const [tile15, setTile15] = useState('');


  const disableButton1 = () => {
    setButtonDisabled1(true);
  };
  const enableButton1 = () => {
    setButtonDisabled1(false);
  };
  const disableButton2 = () => {
    setButtonDisabled2(true);
  };
  const enableButton2 = () => {
    setButtonDisabled2(false);
  };
  const disableButton3 = () => {
    setButtonDisabled3(true);
  };
  const enableButton3 = () => {
    setButtonDisabled3(false);
  };
  const disableButton4 = () => {
    setButtonDisabled4(true);
  };
  const enableButton4 = () => {
    setButtonDisabled4(false);
  };
  const disableButton5 = () => {
    setButtonDisabled5(true);
  };
  const enableButton5 = () => {
    setButtonDisabled5(false);
  };
  const disableButton6 = () => {
    setButtonDisabled6(true);
  };
  const enableButton6 = () => {
    setButtonDisabled6(false);
  };
  const disableButton7 = () => {
    setButtonDisabled7(true);
  };
  const enableButton7 = () => {
    setButtonDisabled7(false);
  };
  const disableButton8 = () => {
    setButtonDisabled8(true);
  };
  const enableButton8 = () => {
    setButtonDisabled8(false);
  };
  const disableButton9 = () => {
    setButtonDisabled9(true);
  };
  const enableButton9 = () => {
    setButtonDisabled9(false);
  };
  const disableButton10 = () => {
    setButtonDisabled10(true);
  };
  const enableButton10 = () => {
    setButtonDisabled10(false);
  };
  const disableButton11 = () => {
    setButtonDisabled11(true);
  };
  const enableButton11 = () => {
    setButtonDisabled11(false);
  };
  const disableButton12 = () => {
    setButtonDisabled12(true);
  };
  const enableButton12 = () => {
    setButtonDisabled12(false);
  };
  const disableButton13 = () => {
    setButtonDisabled13(true);
  };
  const enableButton13 = () => {
    setButtonDisabled13(false);
  };
  const disableButton14 = () => {
    setButtonDisabled14(true);
  };
  const enableButton14 = () => {
    setButtonDisabled14(false);
  };
  const disableButton15 = () => {
    setButtonDisabled15(true);
  };
  const enableButton15 = () => {
    setButtonDisabled15(false);
  };
  const enableButtonRestart = () => {
    setButtonDisabledRestart(false);
  };


  function genRandNum() {
    const rand = Math.floor(Math.random() * 10)
    return rand
  }

  //3/10 vowel probability
  function generateRandomLetters(){
    const vowels = "AEIOU"
    const consts = "BCDFGHJKLMNPQRSTVWXYZ"
    let generatedLetter = ''

    if(genRandNum() > 2){
        generatedLetter = consts[Math.floor(Math.random() * consts.length)]
    }
    else {
        generatedLetter = vowels[Math.floor(Math.random() * vowels.length)]
    }
    return generatedLetter
  }

  useEffect(() => {
    if(word1 == 1 && word2 == 1 && word3 == 1 && word4 == 1 && word5 == 1){
      console.log('winner!')
    }
  }, [word1, word2, word3, word4, word5]);

  //row1
  useEffect(() => {
    setRow1Count(row1count + 1)
    console.log('row1 count:' + row1count)
    if(row1count == 1){
      console.log('row1 word:' + tile1)
      if(tile1 == 'A' || tile1 == 'I'){
        console.log('row1 winning row')
        setWord1(1)
      }
    }
  }, [tile1]);

  //row2
  useEffect(() => {
    setRow2Count(row2count + 1)
    console.log('row2 count:' + row2count)
    let word = tile2 + tile3
    console.log('row2 word:' + word)
    if(dictTwo.includes(word) && row2count == 2){
      console.log('row2 winning row')
      setWord2(1)
    }
  }, [tile2, tile3]);

  //row3
  useEffect(() => {
    setRow3Count(row3count + 1)
    console.log('row3 count:' + row3count)
    let word = tile4 + tile5 + tile6
    console.log('row3 word:' + word)
    if(dictThree.includes(word) && row3count == 3){
      console.log('row3 winning row')
      setWord3(1)
    }
  }, [tile4, tile5, tile6]);

  //row4
  useEffect(() => {
    setRow4Count(row4count + 1)
    console.log('row4 count:' + row4count)
    let word = tile7 + tile8 + tile9 + tile10
    console.log('row4 word:' + word)
    if(dictFour.includes(word) && row4count == 4){
      console.log('row4 winning row')
      setWord4(1)
    }
  }, [tile7, tile8, tile9, tile10]);

  //row5
  useEffect(() => {
    setRow5Count(row5count + 1)
    console.log('row5 count:' + row5count)
    let word = tile11 + tile12 + tile13 + tile14 + tile15
    console.log('row5 word:' + word)
    if(dictFive.includes(word) && row5count == 5){
      console.log('row5 winning row')
      setWord5(1)
    }
  }, [tile11, tile12, tile13, tile14, tile15]);

  //row 6
  function newLetter(){
    setGenedLetter(generateRandomLetters)
    newLetterCount()
  }

  //row 1
  function getTile1(){
    setTile1(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton1()
  }

  //row 2
  function getTile2(){
    setTile2(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton2()
  }
  function getTile3(){
    setTile3(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton3()
  }

  //row 3
  function getTile4(){
    setTile4(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton4()
  }
  function getTile5(){
    setTile5(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton5()
  }
  function getTile6(){
    setTile6(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton6()
  }

  //row 4
  function getTile7(){
    setTile7(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton7()
  }
  function getTile8(){
    setTile8(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton8()
  }
  function getTile9(){
    setTile9(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton9()
  }
  function getTile10(){
    setTile10(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton10()
  }

  //row 5
  function getTile11(){
    setTile11(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton11()
  }
  function getTile12(){
    setTile12(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton12()
  }
  function getTile13(){
    setTile13(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton13()
  }
  function getTile14(){
    setTile14(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton14()
  }
  function getTile15(){
    setTile15(genedLetter)
    setGenedLetter(generateRandomLetters)
    disableButton15()
  }

  function newLetterCount(){
    if(newLetterCounter > 1){
      setNewLetterCounter(newLetterCounter - 1)
    }
    else{
      setNewLetterCounter(newLetterCounter - 1)
      setButtonDisabledRestart(true)
    }
  }

  function restartButton(){
    setTile1('')
    enableButton1()
    setTile2('')
    enableButton2()
    setTile3('')
    enableButton3()
    setTile4('')
    enableButton4()
    setTile5('')
    enableButton5()
    setTile6('')
    enableButton6()
    setTile7('')
    enableButton7()
    setTile8('')
    enableButton8()
    setTile9('')
    enableButton9()
    setTile10('')
    enableButton10()
    setTile11('')
    enableButton11()
    setTile12('')
    enableButton12()
    setTile13('')
    enableButton13()
    setTile14('')
    enableButton14()
    setTile15('')
    enableButton15()
    enableButtonRestart()
    setNewLetterCounter(10)
    if(newLetterCounter != 10){
      setGenedLetter(generateRandomLetters)
    }
    setRow1Count(0)
    setRow2Count(0)
    setRow3Count(0)
    setRow4Count(0)
    setRow5Count(0)
  }

  const { width } = Dimensions.get("window");

  if (width < 720){
    return (

      <View style={styles.container}>
        <Text>Mobile</Text>
        <View style={styles.row}>
        <Pressable style={styles.buttonMobile} onPress={getTile1} disabled={isButtonDisabled1}>
          <Text style={styles.text}>{tile1}</Text>
        </Pressable>
        </View>
  
        <View style={styles.row}>
        <Pressable style={styles.buttonMobile} onPress={getTile2} disabled={isButtonDisabled2}>
          <Text style={styles.text} >{tile2}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile3} disabled={isButtonDisabled3}>
          <Text style={styles.text}>{tile3}</Text>
        </Pressable>
        </View>
  
        <View style={styles.row}>
        <Pressable style={styles.buttonMobile} onPress={getTile4} disabled={isButtonDisabled4}>
          <Text style={styles.text}>{tile4}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile5} disabled={isButtonDisabled5}>
          <Text style={styles.text}>{tile5}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile6} disabled={isButtonDisabled6}>
          <Text style={styles.text}>{tile6}</Text>
        </Pressable>
        </View>
  
        <View style={styles.row}>
        <Pressable style={styles.buttonMobile} onPress={getTile7} disabled={isButtonDisabled7}>
          <Text style={styles.text}>{tile7}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile8} disabled={isButtonDisabled8}>
          <Text style={styles.text}>{tile8}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile9} disabled={isButtonDisabled9}>
          <Text style={styles.text}>{tile9}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile10} disabled={isButtonDisabled10}>
          <Text style={styles.text}>{tile10}</Text>
        </Pressable>
        </View>
  
        <View style={styles.row}>
        <Pressable style={styles.buttonMobile} onPress={getTile11} disabled={isButtonDisabled11}>
          <Text style={styles.text}>{tile11}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile12} disabled={isButtonDisabled12}>
          <Text style={styles.text}>{tile12}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile13} disabled={isButtonDisabled13}>
          <Text style={styles.text}>{tile13}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile14} disabled={isButtonDisabled14}>
          <Text style={styles.text}>{tile14}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={getTile15} disabled={isButtonDisabled15}>
          <Text style={styles.text}>{tile15}</Text>
        </Pressable>
        </View>
  
        <Text># of skips left: {newLetterCounter}</Text>
        <View style={styles.row}>
  
        <Pressable style={styles.buttonMobile} onPress={restartButton}>
          <Image source={require('./images/refresh.png')}  style={styles.imgMobile}/>
        </Pressable>
        <Pressable style={styles.buttonMobile} disabled={true}>
          <Text style={styles.text}>{genedLetter}</Text>
        </Pressable>
        <Pressable style={styles.buttonMobile} onPress={newLetter} disabled={isButtonDisabledRestart}>
          <Image source={require('./images/skip.png')}  style={styles.imgMobile}/>
        </Pressable>
      
        </View>
      </View>
    );
  }
  else {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
      <Pressable style={styles.button} onPress={getTile1} disabled={isButtonDisabled1}>
        <Text style={styles.text}>{tile1}</Text>
      </Pressable>
      </View>

      <View style={styles.row}>
      <Pressable style={styles.button} onPress={getTile2} disabled={isButtonDisabled2}>
        <Text style={styles.text} >{tile2}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile3} disabled={isButtonDisabled3}>
        <Text style={styles.text}>{tile3}</Text>
      </Pressable>
      </View>

      <View style={styles.row}>
      <Pressable style={styles.button} onPress={getTile4} disabled={isButtonDisabled4}>
        <Text style={styles.text}>{tile4}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile5} disabled={isButtonDisabled5}>
        <Text style={styles.text}>{tile5}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile6} disabled={isButtonDisabled6}>
        <Text style={styles.text}>{tile6}</Text>
      </Pressable>
      </View>

      <View style={styles.row}>
      <Pressable style={styles.button} onPress={getTile7} disabled={isButtonDisabled7}>
        <Text style={styles.text}>{tile7}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile8} disabled={isButtonDisabled8}>
        <Text style={styles.text}>{tile8}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile9} disabled={isButtonDisabled9}>
        <Text style={styles.text}>{tile9}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile10} disabled={isButtonDisabled10}>
        <Text style={styles.text}>{tile10}</Text>
      </Pressable>
      </View>

      <View style={styles.row}>
      <Pressable style={styles.button} onPress={getTile11} disabled={isButtonDisabled11}>
        <Text style={styles.text}>{tile11}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile12} disabled={isButtonDisabled12}>
        <Text style={styles.text}>{tile12}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile13} disabled={isButtonDisabled13}>
        <Text style={styles.text}>{tile13}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile14} disabled={isButtonDisabled14}>
        <Text style={styles.text}>{tile14}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getTile15} disabled={isButtonDisabled15}>
        <Text style={styles.text}>{tile15}</Text>
      </Pressable>
      </View>

      <Text># of skips left: {newLetterCounter}</Text>
      <View style={styles.row}>

      <Pressable style={styles.button} onPress={restartButton}>
        <Image source={require('./images/refresh.png')}  style={styles.img}/>
      </Pressable>
      <Pressable style={styles.button} disabled={true}>
        <Text style={styles.text}>{genedLetter}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={newLetter} disabled={isButtonDisabledRestart}>
        <Image source={require('./images/skip.png')}  style={styles.img}/>
      </Pressable>
    
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 85,
    width: 85,
    margin: 3,

    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center', 
    borderWidth: '1.5px',
    borderRadius: '8px',
    color: '#ccc',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    height: 65,
    width: 65,
    marginLeft: 10, 
  },
  imgMobile: {
    height: 55,
    width: 55,
    marginLeft: 5, 
  },
  buttonMobile : {
    height: 65,
    width: 65,
    margin: 3,

    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center', 
    borderWidth: '1.5px',
    borderRadius: '8px',
    color: '#ccc',
  }
});
