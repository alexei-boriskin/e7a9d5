My thoughts on redesigning work

First of all, let me be clear, I am a Java guy and I saw Python code first time in my life making this project interview. So I just have no time and effort to learn Python to just make this last PR. Let me express my thoughts on the subject without coding...

Looking into the current DB structure I see that we are storing conversation participants in the messenger_backend_conversation table in columns user1Id and user2Id, this way we are limited to two participants. To extend this limit we need Conversation one-to-many relationship with Users, I am sure there is a way to model one-to-many in Python, but in DB it will be just one more table mapping Conversations ids to Users ids.
And that is all minimum model changes we need as far as I can see.

What additional (non-database) changes are needed to implement this feature (we want this to be high level but thorough)?

Changes including UI features like Adding (Inviting) User to the conversation, list of conversation participants, etc. For the back-end  - new REST point to modify existing conversation by adding participants.

If our app were already deployed, what steps would we need to take to move to this new feature without disrupting service for current users?
We need to add NEW without modification of OLD REST points to introduce new features. This way currently opened sessions will not break, but users will not see new features till they re-load the application.