// run this when the meteor app is started
Meteor.startup(function() 
{
	// if there are no polls available create sample data
	if (Polls.find().count() === 0)
	{
		//create sample polls
		var samplePolls = [

			{
				question: 'Is Meteor awesome?',
				choices: [
					{ text: 'Of Course!', votes: 0 }, 
					{ text: 'Eh',	votes: 0 },
					{ text: 'No. I like plain JS', votes: 0 }
					 ]
			}

			{
				question: 'What's 5x5?',
				choices: [
					{ text: 'Is it 25? ', votes: 0 }, 
					{ text: 'Is it 5?', votes: 0 }, 
					{ text: 'Is it 3125?', votes: 0}
					 ]
			}

				   ];

		// loop over each sample poll and insert into database
		_.each(samplePolls, function(poll) 
		{ Polls.insert(poll); });
	}
});
