import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

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
				}
			],
			score: 0,
			current: 1
		}
	}
	render(){
		// passing all state values values to questions.jsx this will give us access to the questions
		return(
			<div>
				
				<QuestionList {...this.state}/>
			</div>
			)
	}
}


export default App