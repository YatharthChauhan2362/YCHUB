// gitprofile.config.js

const config = {
    github: {
        username: 'YatharthChauhan2362', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
    },
    social: {
        linkedin: 'yatharth-chauhan-729674202',
        twitter: 'Yatharth_YC',
        facebook: '',
        instagram: 'yatharth.chauhan_yc',
        dribbble: '',
        behance: '',
        medium: 'YatharthChauhan2362',
        stackoverflow: '', // format: userid/username
        website: 'https://yatharthchauhan.me',
        phone: '+91 9724823602',
        email: 'contact@yatharthchauhan.me',
    },
    resume: {
        fileUrl: 'https://drive.google.com/file/d/1TADexrPpLAKJBDFnyQk7oAz9fWLGumrU/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
        'Azure',
        'Devops',
        'Git',
        'Github',
        'Docker',
        'Jenkins',
        'UI-UX',
        'Figma',
        'Adobe Illustrator',
        'Digital Marketing',
        'HTML',
        'CSS',
    ],
    experiences: [

        {
            company: 'CLUMOSS',
            position: 'Founder & Chief Technical Officer',
            from: 'Since 2023',
            to: 'Present',
            companyLink: 'https://clumoss.com',
        },

        {

            company: 'Microsoft',
            position: 'Microsoft Learn Student Ambassador | Peer Mentor | Trainer',
            from: 'April 2023',
            to: 'Present',
            companyLink: 'https://yatharthchauhan.me/yc/assets/images/portfolio/mlsa.png',
        },

        {
            company: 'Medium',
            position: 'Content Writer',
            from: 'March 2023',
            to: 'Present',
            companyLink: 'https://medium.com/@YatharthChauhan',
        },
        {
            company: 'LinkedIn',
            position: 'Content Creator',
            from: 'Jan 2023',
            to: 'Present',
            companyLink: 'https://www.linkedin.com/in/yatharth-chauhan-729674202/',
        },

        {
            company: 'GitHub',
            position: 'GitHub Developer Program Member',
            from: 'March 2021',
            to: 'Present',
            companyLink: 'https://github.com/YatharthChauhan2362',
        },
        {
            company: 'Fiverr',
            position: 'Professional Freelancer',
            from: 'Sep 2021',
            to: 'Present',
            companyLink: 'https://www.fiverr.com/users/yatharth2362/',
        },


        {
            company: 'Coding Ninjas',
            position: 'Coding Ninjas Entrepreneur',
            from: 'April 2023',
            to: 'September 2023',
            companyLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7056975454963974145?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BVBKfObUfT%2FeppAxGfne9RA%3D%3D',
        },

        {
            company: 'Tata Group',
            position: 'Business Development Intern',
            from: 'July 2023',
            to: 'August 2023',
            companyLink: 'https://www.linkedin.com/in/yatharth-chauhan-729674202/details/experience/1635534526079/single-media-viewer?type=LINK&profileId=ACoAADO2PhEBNF86MEln5FKvv_qL3Fb4SqMdI3s&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BVBKfObUfT%2FeppAxGfne9RA%3D%3D',
        },

        {
            company: 'Celebal Technologies',
            position: 'Cloud Infra and Security Domain Intern',
            from: 'May 2023',
            to: 'July 2023',
            companyLink: 'https://www.linkedin.com/in/yatharth-chauhan-729674202/details/experience/2174694518/multiple-media-viewer?profileId=ACoAADO2PhEBNF86MEln5FKvv_qL3Fb4SqMdI3s&treasuryMediaId=1635536474131&type=LINK&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BVBKfObUfT%2FeppAxGfne9RA%3D%3D',
        },

        {
            company: 'The Sparks Foundation',
            position: 'Data Science and Business Analytics Intern',
            from: 'May 2023',
            to: 'July 2023',
            companyLink: 'https://clumoss.com',
        },

        {
            company: 'Charusat Learning And Development Club (CLDC)',
            position: 'Head of UI/UX Team',
            from: 'February 2023',
            to: 'July 2023',
            companyLink: 'https://www.linkedin.com/in/yatharth-chauhan-729674202/details/experience/1635523679327/single-media-viewer?type=IMAGE&profileId=ACoAADO2PhEBNF86MEln5FKvv_qL3Fb4SqMdI3s&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3B9c79qgI5Q8OEy772w%2FbBKg%3D%3D',
        },

        {
            company: 'Microsoft',
            position: 'Software Engineer - Microsoft Azure',
            from: 'August 2022',
            to: 'October 2022',
            companyLink: 'https://www.linkedin.com/in/yatharth-chauhan-729674202/details/experience/2028271018/multiple-media-viewer?profileId=ACoAADO2PhEBNF86MEln5FKvv_qL3Fb4SqMdI3s&treasuryMediaId=1635508295818&type=LINK&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3B9c79qgI5Q8OEy772w%2FbBKg%3D%3D',
        },

        {
            company: 'DTech Studio',
            position: 'Graphics & UI/UX Design Intern Lead',
            from: 'May 2022',
            to: 'July 2022',
            companyLink: 'https://www.linkedin.com/in/yatharth-chauhan-729674202/details/experience/1961128758/multiple-media-viewer?profileId=ACoAADO2PhEBNF86MEln5FKvv_qL3Fb4SqMdI3s&treasuryMediaId=1635509790669&type=LINK&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3B9c79qgI5Q8OEy772w%2FbBKg%3D%3D',
        },

    ],
    certifications: [{
        name: 'Certificate Name',
        body: 'About Certification',
        year: 'June 2022',
        link: 'https://example.com',
    }, ],
    education: [{
            institution: 'Charotar University of Science and Technology (CHARUSAT)',
            degree: 'Bachelors of Technology in Computer Engineering ',
            from: '2020',
            to: '2024',
        },
        {
            institution: 'Advait Vidhyaniketan',
            degree: 'National Council of Educational Research and Training (NCERT)',
            from: '2018',
            to: '2020',
        },
        {
            institution: 'Queen of Angels Convent Higher Secondary School',
            degree: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
            from: '2013',
            to: '2020',
        },



    ],

    // To hide the `My Projects` section, keep it empty.
    externalProjects: [{
            title: 'Project Name',
            description: 'Enter the Description',
            imageUrl: 'https://yatharthchauhan.me/yc/assets/images/portfolio/mlsa.png',
            link: 'https://example.com',
        },
        {
            title: 'Project Name',
            description: 'Enter the Descriptions',
            imageUrl: 'https://via.placeholder.com/250x250',
            link: 'https://example.com',
        },
    ],

    // Display blog posts from your medium or dev account. (Optional)
    blog: {
        source: 'medium', // medium | dev
        username: 'YatharthChauhan', // to hide blog section, keep it empty
        limit: 10, // How many posts to display. Max is 10.
    },

    googleAnalytics: {
        id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: {
        id: '',
        snippetVersion: 6,
    },
    themeConfig: {
        defaultTheme: 'business',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultTheme
        respectPrefersColorScheme: false,

        // Hide the ring in Profile picture
        hideAvatarRing: false,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
        ],

        // Custom theme
        customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
        },
    },
};

export default config;