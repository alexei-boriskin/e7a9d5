My thoughts on redesigning work

First of all, let me be clear, I am a Java guy and I saw Python code first time in my life making this project interview. So I just have no time and effort to learn Python to just make this last PR. Let me express my thoughts on the subject without coding...

Looking into the current DB structure I see that we are storing conversation participants in the messenger_backend_conversation table in columns user1Id and user2Id, this way we are limited to two participants. To extend this limit we need Conversation many-to-many relationship with Users, I am sure there is a way to model many-to-many in Python, but in DB it will be just one more table mapping Conversations ids to Users ids.
And that is all minimum model changes we need as far as I can see.

What additional (non-database) changes are needed to implement this feature (we want this to be high level but thorough)?

Changes including UI features like Adding (Inviting) User to the conversation, list of conversation participants, etc. For the back-end  - new REST point to modify existing conversation by adding participants.

If our app were already deployed, what steps would we need to take to move to this new feature without disrupting service for current users?
We need to add NEW without modification of OLD REST points to introduce new features. This way currently opened sessions will not break, but users will not see new features till they re-load the application.


    How would you update socket event handlers to reflect the schema change?

      We need new few new events like "user-join-conversation" and user "user-left-conversation". On the back-end it should update that many-to-many table (OR we need rest point to update it), on the front-end it will update lict of current conversation participants.

    How would you update Redux state to reflect the schema change?

      Few more action types like ADD_CONVERSATION_USER and REMOVE_CONVERSATION_USER and conversation should have not only "otherUser" property (will keep it it for migration) but an Array of paticipants ids
      
    How would you update route handlers to reflect the schema change?

      ??? Didn't get the question, sorry. Now we have /login /register and /home, what else? Think no changes needed
      
    For the migration plan, can you explain the step by step approach you would adopt to update the tables in batches?
    If we have multiple developers involved in this project, how can we split the task between them without introducing merge conflict?

      Currently have no answer, no experience in that, need deep research and outside of my time dedicated to this task. Sorry.
