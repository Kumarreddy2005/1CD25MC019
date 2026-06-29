# Notification Service – System Architecture & Technical Design

## 1. Introduction

The Notification Service is used to fetch notifications from the given API and display them to users in a prioritized manner. The system ensures that important notifications are shown first and users can filter notifications based on their category.

### Priority Order

1. Placement Notifications
2. Result Notifications
3. Event Notifications

---

## 2. System Architecture

The system follows a simple flow:

Authentication & API Access
          |
Fetch Notifications from API
          |
Sort Notifications by Priority
          |
Filter Notifications
          |
Display to User

---

## 3. Working of the System

The system performs the following steps:

1. Connects to the notification API using authorization token.
2. Fetches notifications from the server.
3. Validates the received data.
4. Sorts notifications based on priority.
5. Displays only the top 10 notifications.
6. Allows users to filter notifications by category.

---

## 4. Modules Used

### Notification Fetch Module

Responsible for getting notifications from the API.

### Sorting Module

Sorts notifications according to the priority order:

Placement → Result → Event

### Filter Module

Allows users to view notifications of a particular category.

### User Interface Module

Displays notifications in a simple and user-friendly format.

---

## 5. Error Handling

The system handles the following situations:

* API connection failure
* Invalid response from server
* No notifications available
* Authorization errors

Appropriate messages are shown to the user whenever an error occurs.

---

## 6. Future Enhancements

The system can be extended in future by adding:

* Database support
* Notification history
* Real-time notifications
* Additional notification categories
* Caching for better performance


## Conclusion

The Notification Service provides an efficient way to retrieve, sort and display notifications. By prioritizing Placement, Result and Event notifications, the system ensures that users receive the most important information first while maintaining a simple and scalable architecture.
