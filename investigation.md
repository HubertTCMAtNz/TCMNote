
bool kiosk = false, bool hasRegistered = true, bool isExistingPerson = false, bool registrationExpired = false, Uri returnUrl = null,
string returnTitle = null, bool anticipatedPayment = false, string pollKey = null, string paymentLabel = "Pay", bool recurring = false,
bool canPayAgain = false, bool paidAgain = false, bool payAgainError = false, bool confirmByVoice = false, bool referMerchantApp = false,
bool delayed = false



#  _OneOffGuestSuccess.cshtml

download link is incorrect
```
@if (paymentLayoutModel.HppReferMerchantAppEnabled) {
	<text>Thanks for signing up, Please download @paymentLayoutModel.FormattedAppName app for free here: <span>pushpay.com/confirm/123456</span></text>
}
else {
	<text>Thanks for signing up, Please download the free Pushpay app here: <span>pushpay.com/confirm/123456</span></text>
}
```

# _ReferMerchantAppGuestPaymentSuccessMessages.cshtml
```
if (!Model.ConfirmByVoice) {
	<p>We have sent an SMS to your mobile with a link to download @paymentLayoutModel.FormattedAppName app or you can click on the link below.</p>
	<p class="note">Messages may take a minute to arrive.</p>
}
else {
	<div class="next-time">
		@AppCta(paymentLayoutModel.FormattedAppName, payButtonLabel.NounLowerCase)
	</div>
}

@helper AppCta(string formattedAppName, string paymentLabel)
{
	<p>You can download @formattedAppName app and make your next @paymentLabel faster using your iOS or Android device.</p>
}

@helper AppIntro()
{
	<p>Did you know we have a mobile app?</p>
}
```

# _AppDownloads.cshtml
can be deleted directly


kiosk=true&&useKioskReturnLink=true&&recurring=true&&referMerchantApp=true
kiosk=true&&useKioskReturnLink=true&&recurring=true&&referMerchantApp=false
kiosk=true&&useKioskReturnLink=true&&recurring=false&&referMerchantApp=true
kiosk=true&&useKioskReturnLink=true&&recurring=false&&referMerchantApp=false

--- kiosk=false, AnticipatedPayment=false
recurring=true&&referMerchantApp=true
recurring=false&&referMerchantApp=true
recurring=true&&referMerchantApp=false
recurring=false&&referMerchantApp=false



# GuestPaymentSucces.cshtml
## Combinations:
	ExperienceType = Kiosk/AnticipatedPayment IsOneOffPayment=true (_OneOffKioskSuccess) HppReferMerchantApp=true DelayStatus=Delayed
	url: ?kiosk=true&&recurring=false&&referMerchantApp=true&&delayed=true
### Exception happens in this url. Will fix.

	ExperienceType = Kiosk/AnticipatedPayment IsOneOffPayment=true (_OneOffKioskSuccess) DelayStatus=ProcessedOnTime
	url: ?kiosk=true&&recurring=false&&delayed=false

#### _ReferMerchantAppGuestPaymentSuccessMessages
	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=true(_ReferMerchantAppGuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=true (_AppDownloads.cshtml)
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=true&&isExistingPerson=true&&hasRegistered=false

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=true(_ReferMerchantAppGuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=false Model.HasRegistered=true Model.ConfirmByVoice=false
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=true&&isExistingPerson=false&&hasRegistered=true&&confirmByVoice=false

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=true(_ReferMerchantAppGuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=false Model.HasRegistered=true Model.ConfirmByVoice=true
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=true&&isExistingPerson=false&&hasRegistered=true&&confirmByVoice=true

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=true(_ReferMerchantAppGuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=false Model.HasRegistered=false Model.RegistrationExpired=true
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=true&&isExistingPerson=false&&hasRegistered=false&&registrationExpired=true

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=true(_ReferMerchantAppGuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=false Model.HasRegistered=false Model.RegistrationExpired=false
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=true&&isExistingPerson=false&&hasRegistered=false&&registrationExpired=false

#### _GuestPaymentSuccessMessages
	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=false(_GuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=true
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=false&&isExistingPerson=true&&hasRegistered=false

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=false(_GuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=false Model.HasRegistered = true Model.ConfirmByVoice=false
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=false&&isExistingPerson=false&&hasRegistered=true&&confirmByVoice=false

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=false(_GuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=false Model.HasRegistered = true Model.ConfirmByVoice=true
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=false&&isExistingPerson=false&&hasRegistered=true&&confirmByVoice=true

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=false(_GuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=false Model.HasRegistered = false Model.RegistrationExpired=true
	url: ?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=false&&isExistingPerson=false&&hasRegistered=false&&registrationExpired=true

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=Delayed CanPayAgain=true (_AppPreviewPhone.cshtml) HppReferMerchantAppEnabled=false(_GuestPaymentSuccessMessages) (Model.IsExistingPerson && !Model.HasRegistered)=false Model.HasRegistered = false Model.RegistrationExpired=false
	url:?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=true&&canPayAgain=true&&referMerchantApp=false&&isExistingPerson=false&&hasRegistered=false&&registrationExpired=false

#### Other
	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=ProcessedOnTime (Model.HppPayerWhoHasAlreadyRegisteredInThePast || !Model.HasRegistered || Model.CanPayAgain || Model.ConfirmByVoice) = false HppReferMerchantAppEnabled=true
	url:?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=false&&confirmByVoice=false&&referMerchantApp=true

	ExperienceType = HostedPaymentsPage IsOneOffPayment=true (_OneOffGuestSuccess) DelayStatus=ProcessedOnTime
	(Model.HppPayerWhoHasAlreadyRegisteredInThePast || !Model.HasRegistered || Model.CanPayAgain || Model.ConfirmByVoice) = false HppReferMerchantAppEnabled=false
	url:?kiosk=false&&isAnticipatedPayment=false&&recurring=false&&delayed=false&&confirmByVoice=false&&referMerchantApp=false

### Recurring
#### _ReferMerchantAppRecurringGuestSuccess
	ExperienceType = Kiosk/AnticipatedPayment  IsOneOffPayment=false HppReferMerchantAppEnabled=true(_ReferMerchantAppRecurringGuestSuccess) Model.ConfirmByVoice=false HppReferMerchantAppEnabled=true
	url:?kiosk=true&&recurring=true&&referMerchantApp=false&&confirmByVoice=false

	ExperienceType = Kiosk/AnticipatedPayment  IsOneOffPayment=false HppReferMerchantAppEnabled=true(_ReferMerchantAppRecurringGuestSuccess) Model.ConfirmByVoice=true
	url:?kiosk=true&&recurring=true&&referMerchantApp=false&&confirmByVoice=true
##### TODO: Delete HppReferMerchantAppEnabled=false from _ReferMerchantAppRecurringGuestSuccess

#### _RecurringGuestSuccess
	ExperienceType = HostedPaymentsPage IsOneOffPayment=false HppReferMerchantAppEnabled=false (_RecurringGuestSuccess)  Model.ConfirmByVoice=false
	url:?kiosk=false&&isAnticipatedPayment=false&&recurring=true&&referMerchantApp=false&&confirmByVoice=false

##### TODO: Delete HppReferMerchantAppEnabled=true from _RecurringGuestSuccess
	ExperienceType = HostedPaymentsPage IsOneOffPayment=false HppReferMerchantAppEnabled=false (_RecurringGuestSuccess)  Model.ConfirmByVoice=true
	url:?kiosk=false&&isAnticipatedPayment=false&&recurring=true&&referMerchantApp=false&&confirmByVoice=true

