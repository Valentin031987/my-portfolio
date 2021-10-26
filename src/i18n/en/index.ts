export default {
  //header
  myPortfolio: 'My Portfolio !',
  mySpecialities: 'My Specialities',
  contactMe: 'Contact me',
  home: 'Home',
  myWorks: 'My works',
  aboutMe: 'About me',
  goBack: 'Go back',
  //footer
  wContactMe: 'Do you want to contact me?',
  copyright: 'All rights reserved',
  //card work
  git: 'Git',
  viewSite: 'View site',
  //sections
  //about me
  aboutMeLine1: "TSU. in Computer Science since 2007 and Computer Engineer since 2013, I started developing desktop applications for Windows, mainly invoicing and inventories in Visual Basic. Soon I migrated to web development, I started with CakePHP, which at the moment was one of the best mvc frameworks available, robust in terms of security and good performance. Then I would meet Yii framework and later Laravel.",
  aboutMeLine2: "With more than 10 years in the development business I have had the opportunity to use various technologies, architectures, design patterns and the like. Self-taught, curious and committed to meeting goals, with the ability to provide solutions and innovate when necessary, I like to stay updated and always studying new technologies and new ways of facing challenges that are never lacking.",
  //portfolio
  portfolio: 'My Works',
  gbetReview: 'Betting site written in Laravel, uses Pusher for notifications in real time, has a dashboard for internal processes and a public area for customer profiles that allows you to check their betting history, balance sheet, balances, etc.',
  invoicerReview: 'It is a billing and inventory system that has a sales module, budgets, daily cash accounting, accounts receivable, customers, purchases, quotes, expenses, accounts payable, suppliers, products, consumption, etc.',
  cakeReview: 'An online store with a shopping cart and an order tracking system developed in CakePHP, HTML5, Css, Jquery (with a couple of additional plugins) and MySQL for the database. It has an administrative panel for which I held AdminLTE.',
  portfolioReview: 'Where I show you some of the work I have done. Developed in VueJs + Quasar Framework exclusively.',
  //specialities
  mySpecialitiesReview: "A somewhat summarized list of the technologies that I currently use for my developments.",
  //pages
  pages: {
    gbet: {
      line1: 'A betting site written in Laravel with a made-to-order betting engine. Basically a person launches his bet on one side, said bet is waiting until another client goes on the opposite side with an amount similar to that of the contestant.',
      line2: 'Use Pusher for real-time notifications. For example, the type of closing of bets is notified: the amount that is paid is altered and depends on the number of bettors in favor of a copy. This information can be used by the bettor in his favor.',
      line3: 'It is notified if the bet plays, if it does not play. If the bettor won or lost, how much did he win, etc.',
      line4: 'It has a dashboard for internal processes and an area for customer profiles that allows you to check their betting history, balance sheet, balances, etc.',
    },
    invoicer: {
      line1: 'It is a billing and inventory system that has a sales module, budgets, cash count, allocation of boxes by operator, accounts receivable, customers, purchases, quotes, expenses, accounts payable, suppliers, products, consumption for record of losses, for example loss or loss, etc.',
      line2: 'It has a persistence layer to store documents waiting in localStorage, supports multiple types of payment and 2 modes to register them, with and without tracking.',
      line3: 'ACL based security, each permission (end point) can and should be configured for each access group.',
      line4: 'Supports multiple languages: Spanish and English, with the possibility of adding more if necessary.',
      line5: 'A section for currency settings, date-time formats and emails to send invoices by mail for example.',
      line6: 'The front end has been written in Vue 3 and Quasar framework.',
      line7: 'The back end (REST API) in Express / NestJs with TypeORM and PostgreSQL for the database.',
    },
    cake: {
      line1: 'An online store with a shopping cart and an order tracking system developed in CakePHP, HTML5, Css, Jquery (with a couple of additional plugins) and MySQL for the database. It has an administrative panel for which I held AdminLTE.',
      line2: 'With the advantages that CakePHP offers with minimal adjustments: security and session components, access control list, CSRF Protection Middleware, XSS Prevention and SQL injection, etc.',
      line3: 'The process in short is as follows: a customer places his order, the operator confirms the payment in the bank accounts according to the order data, makes the shipment according to the delivery service selected by the customer in the order form.',
      line4: 'It allows updating from the administrative panel the tracking of the order, once received the client assesses the service and marks the order as received if it is the case.',
      line5: 'The administrative panel has several modules and tools to facilitate tasks: it allows registering products, suppliers, brands, presentations, laboratories, integrated point of sale, various reports, CSV format outputs, various batch operations, etc.',
    },    
    portfolio: {
      line1: 'Where I show you some of the work I have done. Developed in VueJs + Quasar Framework exclusively.',
      line2: 'It has a couple of cool things, for example making global variables Quasar-style without importing them into vue files.',
      line3: 'The scrollspy of the navigation bar that with Bootstrap is trivial, as well as doing internationalization with vue-i18n.',
      line4: 'If you find it useful, you can view or clone the repo and adapt it to your needs.',
    },    
  }
};
