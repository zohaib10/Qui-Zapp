import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';


//this is the app which will hold all of the components and will transfer them to index.js
class App extends Component{
	constructor(props){
		super(props);
		//setting initial state
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is the name of Jon Snow\'s wolf?',
					choices: [
						{
							id: 'a',
							text: 'GreyWind'
						},
						{
							id: 'b',
							text: 'Nymeria'
						},
						{
							id: 'c',
							text: 'Summer'
						},
						{
							id: 'd',
							text: 'Ghost'
						}
					],
					correct: 'd'
				},
				{
					id: 2,
					text: 'In which city did Dario fight a one on one battle for Denerys?',
					choices: [
						{
							id: 'a',
							text: 'Qarth'
						},
						{
							id: 'b',
							text: 'Mereen'
						},
						{
							id: 'c',
							text: 'Volantis'
						},
						{
							id: 'd',
							text: 'Pentos'
						}
					],
					correct: 'b'
				},
				{
					id: 3,
					text: 'Which dragon did the Night King kill?',
					choices: [
						{
							id: 'a',
							text: 'Rhaegal'
						},
						{
							id: 'b',
							text: 'Drogon'
						},
						{
							id: 'c',
							text: 'Viserion'
						},
						{
							id: 'd',
							text: 'Balerion'
						}
					],
					correct: 'c'
				},
				{
					id: 4,
					text: 'Where does Jorah Mormont hail from?',
					choices: [
						{
							id: 'a',
							text: 'Bear Island'
						},
						{
							id: 'b',
							text: 'DreadFort'
						},
						{
							id: 'c',
							text: 'Karhold'
						},
						{
							id: 'd',
							text: 'Pyke'
						}
					],
					correct: 'a'
				},
				{
					id: 5,
					text: 'Which religion did Ramsey Bolton follow?',
					choices: [
						{
							id: 'a',
							text: 'The Drowned God'
						},
						{
							id: 'b',
							text: 'Faith of the Seven'
						},
						{
							id: 'c',
							text: 'Old Gods of the Forest'
						},
						{
							id: 'd',
							text: 'The Lord of Light'
						}
					],
					correct: 'c'
				},
				{
					id: 6,
					text: 'Lannisport is located in which kingdom?',
					choices: [
						{
							id: 'a',
							text: 'The Reach'
						},
						{
							id: 'b',
							text: 'The Rock'
						},
						{
							id: 'c',
							text: 'Dorne'
						},
						{
							id: 'd',
							text: 'The Riverlands'
						}
					],
					correct: 'b'
				},
				{
					id: 7,
					text: '"A small man can cast a very large shadow" was said by?',
					choices: [
						{
							id: 'a',
							text: 'Lord Varys'
						},
						{
							id: 'b',
							text: 'Petyr Baelish'
						},
						{
							id: 'c',
							text: 'Jon Snow'
						},
						{
							id: 'd',
							text: 'Daenerys Targaryen'
						}
					],
					correct: 'a'
				},
				{
					id: 8,
					text: 'The Three watch towers at the Wall are?',
					choices: [
						{
							id: 'a',
							text: 'Crasters Keep, Hightower, Castle Black'
						},
						{
							id: 'b',
							text: 'Shadow Tower, Eastwatch, Castle Black'
						},
						{
							id: 'c',
							text: 'Eastwatch, Castle Black, Window\'s Watch'
						},
						{
							id: 'd',
							text: 'Eastwatch, Greywater Watch, Castle Black'
						}
					],
					correct: 'b'
				},
				{
					id: 9,
					text: 'The Bloody Gate is know to be the entrance to?',
					choices: [
						{
							id: 'a',
							text: 'Pyke'
						},
						{
							id: 'b',
							text: 'Riverrun'
						},
						{
							id: 'c',
							text: 'The Eyrie'
						},
						{
							id: 'd',
							text: 'The Twins'
						}
					],
					correct: 'c'
				},
				{
					id: 10,
					text: 'Where did Arya encounter Nymeria?',
					choices: [
						{
							id: 'a',
							text: 'The North'
						},
						{
							id: 'b',
							text: 'The Riverlands'
						},
						{
							id: 'c',
							text: 'The Vale'
						},
						{
							id: 'd',
							text: 'The Reach'
						}
					],
					correct: 'b'
				},
				{
					id: 11,
					text: '"A Lion does not concern itself with the opinion of sheep" was said by?',
					choices: [
						{
							id: 'a',
							text: 'Jamie Lannister'
						},
						{
							id: 'b',
							text: 'Tyrion Lannister'
						},
						{
							id: 'c',
							text: 'Cersi Lannister'
						},
						{
							id: 'd',
							text: 'Tywin Lannister'
						}
					],
					correct: 'd'
				},
				{
					id: 12,
					text: 'What is the name of Brienne\'s father?',
					choices: [
						{
							id: 'a',
							text: 'Sandor Tarth'
						},
						{
							id: 'b',
							text: 'Randyll Tarth'
						},
						{
							id: 'c',
							text: 'Selwyn Tarth'
						},
						{
							id: 'd',
							text: 'Roose Tarth'
						}
					],
					correct: 'c'
				},
				{
					id: 13,
					text: 'Bronn is also known as?',
					choices: [
						{
							id: 'a',
							text: 'Ser Bronn of the Blackwater and The Sellsword'
						},
						{
							id: 'b',
							text: 'Ser Bronn of the Blackwater and The Bastard of the Dreadfort'
						},
						{
							id: 'c',
							text: 'Ser Bronn of the Blackwater and The Hired Gunn'
						},
						{
							id: 'd',
							text: 'Ser Bronn of the Blackwater and The Cutthroat'
						}
					],
					correct: 'd'
				},
				{
					id: 14,
					text: 'Where did we first see Qyburn?',
					choices: [
						{
							id: 'a',
							text: 'Harrenhal'
						},
						{
							id: 'b',
							text: 'The Citadel'
						},
						{
							id: 'c',
							text: 'The Twins'
						},
						{
							id: 'd',
							text: 'King\'s Landing'
						}
					],
					correct: 'a'
				},
				{
					id: 15,
					text: 'Where did Prince Oberyn Martell gain his knowledge of poisons from?',
					choices: [
						{
							id: 'a',
							text: 'Braavos'
						},
						{
							id: 'b',
							text: 'The Citadel'
						},
						{
							id: 'c',
							text: 'Volantis'
						},
						{
							id: 'd',
							text: 'UC Davis'
						}
					],
					correct: 'b'
				},
				{
					id: 16,
					text: 'Where did Ned Stark go to save Lyanna Stark?',
					choices: [
						{
							id: 'a',
							text: 'The Stormlands'
						},
						{
							id: 'b',
							text: 'Highgarden'
						},
						{
							id: 'c',
							text: 'Dragonstone'
						},
						{
							id: 'd',
							text: 'Dorne'
						}
					],
					correct: 'd'
				},
				{
					id: 17,
					text: 'Where did Daenerys Targaryen gain the services of the Unsullied?',
					choices: [
						{
							id: 'a',
							text: 'Astapor'
						},
						{
							id: 'b',
							text: 'Yunkai'
						},
						{
							id: 'c',
							text: 'Qarth'
						},
						{
							id: 'd',
							text: 'Pentos'
						}
					],
					correct: 'a'
				},
				{
					id: 18,
					text: 'Which notable westerosi character was afiiliated with the Second Sons?',
					choices: [
						{
							id: 'a',
							text: 'Jorah Mormant'
						},
						{
							id: 'b',
							text: 'Lord Varys'
						},
						{
							id: 'c',
							text: 'Prince Oberyn Martell'
						},
						{
							id: 'd',
							text: 'Ned Stark'
						}
					],
					correct: 'c'
				},
				{
					id: 19,
					text: 'Which notable member of the Kingsgaurd was appointed to gaurd Lyanna Stark?',
					choices: [
						{
							id: 'a',
							text: 'Ser Preston Greenfield'
						},
						{
							id: 'b',
							text: 'Ser Jamie Lannister'
						},
						{
							id: 'c',
							text: 'Ser Barristan Selmy'
						},
						{
							id: 'd',
							text: 'Ser Arthur Dayne'
						}
					],
					correct: 'd'
				},
						{
					id: 20,
					text: 'Where is Harrenhal located?',
					choices: [
						{
							id: 'a',
							text: 'The North'
						},
						{
							id: 'b',
							text: 'The Vale'
						},
						{
							id: 'c',
							text: 'The Riverlands'
						},
						{
							id: 'd',
							text: 'The Rock'
						}
					],
					correct: 'c'
				}
				


			],
			score: 0,
			current: 1
		}
	}

	//update current 
	setCurrent(current){
		this.setState({current});
	}
	//update the score
	setScore(score){
		this.setState({score});
	}

	render(){
		//to make sure we don't go past the complete questions
		if(this.state.current > this.state.questions.length){
			var scorebox = '';
			var results = <Results {...this.state}/>;
		}else {
			var scorebox = <Scorebox {...this.state}/>;
		}
		// passing all state values values to questions.jsx this will give us access to the questions
		return(
			<div>
				{scorebox}
				<QuestionList {...this.state} setCurrent = {this.setCurrent.bind(this)} setScore = {this.setScore.bind(this)}/>
				{results}
				
			</div>
			)
	}
}


export default App