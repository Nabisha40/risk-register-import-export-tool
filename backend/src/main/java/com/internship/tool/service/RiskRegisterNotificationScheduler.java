package com.internship.tool.service;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(
    value = "mail.enabled",
    havingValue = "true"
)
public class RiskRegisterNotificationScheduler {

    private final EmailNotificationService emailNotificationService;

    public RiskRegisterNotificationScheduler(
            EmailNotificationService emailNotificationService) {

        this.emailNotificationService = emailNotificationService;
    }

    @Scheduled(cron = "${app.notifications.reminder-cron:0 0 9 * * *}")
    public void sendScheduledNotifications() {

        emailNotificationService.sendDailyReminderNotifications();

        emailNotificationService.sendDeadlineAlertNotifications();
    }
}