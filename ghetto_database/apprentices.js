window.GhettoDatabase = {};
window.GhettoDatabase.apprentices = [
	{
		apprentice_id : 0,
		apprentice_name : 'Alek Hurst',
		apprentice_subtitle : 'Web Developer',
		apprentice_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		apprentice_tags : ['Developer', 'Web', 'Javascript', 'HTML', 'CSS'],
		profile_picture : './images/profile-pic-1.png',
		modules : [
			{
				title : 'Ideal Apprenticeship',
				partial : 'description.html',
				css_class : 'description-module',
				information : [
					'Being very new to web development, I am not exactly sure what I want to do right now. My end goal is to be able to make apps and websites with the ideas that I have. I would like to be an apprentice for somebody who is involved with a startup or is working on an app as a project.'
				]
			},
			{
				title: 'Availability',
				partial : 'daily_hours.html',
				css_class : 'daily-hours-module',
				information : [
					'Sat : All day',
					'Sun : All day',
					'Mon : 8am-2pm',
					'Tue : 8am-2pm',
					'Wed : 8am-2pm',
					'Thu : 8am-2pm',
					'Fri : 8am-2pm',
				]
			},
			{
				title: 'Achievements',
				partial : 'achievements.html',
				css_class : 'achievements-module',
				information : [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   mollit anim id est laborum.',
				]
			},
			{
				title: 'Top Skills',
				partial : 'skills.html',
				css_class : 'skills-module',
				information : [
					'Javascript',
					'HTML5',
					'CSS3',
					'UX Design',
					'Project Management',
					'UI Design',
					'Fast Learner'
				]
			}
		]
	},
	{
		apprentice_id : 1,
		apprentice_name : 'David Corral Lyons',
		apprentice_subtitle : 'Aspiring Entrepreneur',
		apprentice_description : 'I am an aspiring entrepreneur who would eventually like to have my own company. At the moment I have very good business and leadership skills.',
		apprentice_tags : ['Entrepreneurship', 'Project Management', 'Social Engineering', 'Programming'],
		profile_picture : './images/profile-david.png',
		modules : [
			{
				title : 'Ideal Apprenticeship',
				partial : 'description.html',
				css_class : 'description-module',
				information : [
					'I would like to grow my skills as a leader and learn how to embark on a career as an entrepreneur. I would like to learn rudementary technical skills so that I can implement the ideas that I have, but am not quite looking for a role as a developer.'
				]
			},
			{
				title: 'Availability',
				partial : 'daily_hours.html',
				css_class : 'daily-hours-module',
				information : [
					'Sat : All day',
					'Sun : All day',
					'Mon : 8am-2pm',
					'Tue : 8am-2pm',
					'Wed : 8am-2pm',
					'Thu : 8am-2pm',
					'Fri : 8am-2pm',
				]
			},
			{
				title: 'Experience',
				partial : 'experience.html',
				css_class : 'experience-module',
				information : [
					{
						title : 'Student Assistant',
						location : 'Santa Clara University',
						dates : 'December 2013 - Present'
					},
					{
						title : 'Social/Cultural Program Coordinator',
						location : 'Santa Clara Multicultural center',
						dates : 'September 2013 - June 2014'
					}

				]
			},
			{
				title: 'Education',
				partial : 'education.html',
				css_class : 'education-module',
				information : {
					institution : 'Santa Clara University',
					degree : 'Pursuing Bachelors of Science in Economics',
					courses : 'Related Coursework: ECON 11, MATH 12, BUSN 1, ECON 23, ECON 25, ECON 192, ECON 121, BUSN 122',
				}
			}
		]
	},
	{
		apprentice_id : 2,
		apprentice_name : 'Lejla Ahmetspahic',
		apprentice_subtitle : 'Office Manager',
		apprentice_description : 'I am currently a fourth year undergraduate student at Santa Clara University, pursuing a degree in marketing with a minor in English. With strong interpersonal skills and great interests in real estate, communications, public relations, and research, I am constantly seeking ways to fuse all these subjects together.',
		apprentice_tags : ['Entrepreneurship', 'English', 'Social Networking', 'Program Management'],
		profile_picture : './images/lejla-profile.png',
		modules : [
			{
				title : 'Ideal Apprenticeship',
				partial : 'description.html',
				css_class : 'description-module',
				information : [
					'I would like to pursue an apprenticeship in marketing, where I can combine my marketing skills and persona to push a product to success. Based on my past experience in marketing, Im ready for a more advanced position'
				]
			},
			{
				title: 'Top Skills',
				partial : 'skills.html',
				css_class : 'skills-module',
				information : [
					'Marketing',
					'Social Networking',
					'Microsoft Office',
					'Sales',
					'Foreign Languages',
					'Volunteering',
				]
			},
			{
				title: 'Experience',
				partial : 'experience.html',
				css_class : 'experience-module',
				information : [
					{
						title : 'Real Estate Agent',
						location : 'ELITE Realty & Mortgage Co.',
						dates : 'June 2014 - Present'
					},
					{
						title : 'Assistant',
						location : 'Alameda Public Affairs Forum',
						dates : 'September 2008 - September 2013'
					}

				]
			},
			{
				title: 'Education',
				partial : 'education.html',
				css_class : 'education-module',
				information : {
					institution : 'Santa Clara University',
					degree : 'Bachelor of Commerce, Marketing',
					courses : 'Related Coursework: Principles of Marketing, Marketing Analysis, Customer Behavior, Integrated Marketing Communication, Theories of Modern Grammar, History of Modern English Language',
				}
			}
		]
	}
]