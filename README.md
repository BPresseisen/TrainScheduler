# TrainScheduler aka The Pegasus Train Scheduler

The Pegasus Train Scheduler in name and scope draws its inspiration from the Greek mythological creature, a winged stallion. Pegasus was the offspring of Poseidon and the gorgon Medusa. Although he had sprung from the monster's severed, snaky head, Pegasus was gar from being monstrous himself. His fine, strong horse's body was more beautiful than any ordinary stallion, while the great wings that spread from his shoulders carried him through the air more gracefully than a bird. Before he could be ridden, Pegasus had to be caught and broken to the bit and bridle, for he lived wild and free.

In this application, Pegasus likeness is used strictly for tbe aesthetic and creative narrative. 

Future development plans include the following mods:

(1) greater mobile responsiveness
(2) functionality to edit and delete trains from the schedule
(3) a refresh button or timed event that (re)draws the screen in real-time to show the next train arrivaland and countdown
(4)

Here is the deployed link:

https://bpresseisen.github.io/TrainScheduler/

ABOUT THE DESIGN:

Truth be told, The Pegasus Train Scheduler is an application that addresses the problem of how to creating a scheduling tool that gives users the ability to schedule events in a NoSQL cloud database. 

In Pegasus, train schedules are the event and are stored and synced to a Firebase database. 

Data is synced across all clients in realtime, and remains available when the app goes offline. Data is stored as JSON and synchronized in realtime to every connected client.

Additionally, The Pegasus Train Scheduler calculates the next train to arrive and coundtdown clock based on a first train to depart, which is declared by the user-input. This calculation is entirely possible given the use of moment.js

moment.is a free and open source JavaScript library that removes the need to use the native JavaScript Date object directly. The library is a wrapper for the Date object (in the same way that jQuery is a wrapper for JavaScript) making the object a whole lot easier to work with.
