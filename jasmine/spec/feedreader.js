/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('FEED newes are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        it('FEED URL exists', function (){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('FEED NAME exists', function (){
            allFeeds.forEach(function(feedName){
                expect(feedName.name).toBeDefined();
                expect(feedName.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function (){
    
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('TOGGLES Visibility of menu depending on click', function() {

            /* Since we made sure that the menu is hidden by default,
             * after clicking on the menu icon, it should not be hidden anymore.
             */
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            /* Clicking again on the menu icon should hide the menu again */
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
    
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            /* remove any old feeds */
            $('.feed').empty();
            /* ensure loadFeed completes before running the test */
            loadFeed(0, done);
        });

        /* Ensure there is at least one .entry element within the 
         * .feed container.
         */
        it('contain at least one entry within FEED', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });

    });
    
    /* TODO: Write a new test suite named "New Feed Selection" */
     /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    
        describe('New Feed Selection', function() {
            /* Hold the feed entries before and after switching feed selection */
            let oldEntries;
            let newEntries;
    
        
            beforeEach(function(done) {
                /* load the first feed */
                loadFeed(0, function() {
                    oldEntries = $('.feed').html();
                
                    /* switch to the next feed */  
                    loadFeed(1, function() {
                        newEntries = $('.feed').html();
                        done();
                    });
                });
            });
    
            /* Ensure that when a new feed is loaded by the loadFeed function 
             * the content actually changes.
             */
            it('changes the content', function() {
                expect(oldEntries).not.toBe(newEntries);
            });
        });



    
    
}());
