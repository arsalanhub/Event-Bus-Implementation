1. I have delved deeply into the intricate workings of event bus systems such as RabbitMQ, Apache Kafka, and NATS, gaining a comprehensive understanding of their functionalities and effective implementations.
2. I have honed my event emitting and receiving skills using the advanced technology of Axios.
3. I have developed highly efficient microservices that adeptly consume data from the event bus, ensuring seamless communication flow.
4. I have addressed the critical issue of persistent data storage within the event bus, guaranteeing robust and reliable communication even in the event of service failures.
5. All events will be persisted & when the service comes up it can consume the persisted events. Thus no events will lost in the process.
6. My proficient management of event persistence and transmission has enabled me to maintain uninterrupted communication networks, even in the face of service disruptions.

# Flow of Application
<img align="center" alt="GIF" src="https://github.com/arsalanhub/Event-Bus-Implementation/blob/main/img/flow.png" />

# Event bus use case:
1. Suppose moderation service goes down. Then also client will be able to make request to
   the comment service
2. And comment service will be able to emit the "CommentCreated" event
3. Since moderation service is down it cannot listen the event "CommentCreated"
4. As soon as moderation service goes up it can use event bus to retrieve all the stacked
   "CommentCreated" event and perform all operation as always.