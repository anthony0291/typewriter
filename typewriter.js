const sentence = "hello there from lighthouse labs";

const printSentence = () => {
  let sent = sentence + "\n";
  for (let i in sent) {
      setTimeout(() => process.stdout.write(sent[i]), i * 50);
    }   
  };

printSentence(sentence);

