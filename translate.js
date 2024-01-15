
jQuery( document ).ready(function() {
	
	jQuery(".section-title h3").text(function () {
		return jQuery(this).text().replace("COLLECTIONS", "KATEGORIEN"); 
	});
	jQuery(".section-title h3").text(function () {
		return jQuery(this).text().replace("PRODUCTS", "PRODUKTE"); 
	});
	jQuery(".products-items__title span").text(function () {
		return jQuery(this).text().replace("All Products", "Alle Produkte"); 
	});
	
	jQuery(".shortcuts__container-title").text(function () {
		return jQuery(this).text().replace("Pages", "Seiten"); 
	});
	jQuery(".legal_row .legal__title").text(function () {
		return jQuery(this).text().replace("About Us", "Impressum"); 
	});
	
	jQuery(".shortcuts__container-title").text(function () {
		return jQuery(this).text().replace("Track Details", "Paketverfolgung"); 
	});
	
	jQuery(".timeline-item p").text(function () {
		return jQuery(this).text().replace("Track Your Order", "Vefolge deine Bestellung"); 
	});
	
	jQuery(".timeline-item p").text(function () {
		return jQuery(this).text().replace("Tracking Details", "Sendungs Details"); 
	});
	
	jQuery(".track-order__info__title").text(function () {
		return jQuery(this).text().replace("Track Your Order", "Sendungsverfolgung"); 
	});
	
	jQuery(".track-contImg p").html(function () {
		return jQuery(this).html().replace("Enter your order details to track your order's current status.", "Hinweis: Zur Zeit funktioniert das Formular nicht. <br class='hide-xs'/> Bitte nutze den Link zur Sendungsverfolgung in deiner <br  class='hide-xs'/>Versandbestätigung"); 
	});
	
	jQuery(".input-info__item-elem .input-info__elem-label .input-info__item-elem-title").text(function () {
		return jQuery(this).text().replace("Order Number", "Bestell-Nr."); 
	});
	
	jQuery(".trackorder-btn .submitTrack").text(function () {
		return jQuery(this).text().replace("Track order", "PAKETVERFOLGUNG"); 
	});
	
	jQuery(".shortcuts .shortcuts__container-title").text(function () {
		return jQuery(this).text().replace("Contact Details", "KONTAKT"); 
	});
	
	jQuery(".contact-detail h6").text(function () {
		return jQuery(this).text().replace("Store Address", "Impressum"); 
	});
	
	jQuery(".contact-detail h6").text(function () {
		return jQuery(this).text().replace("Business Hours", "Erreichbarkeit"); 
	});
	
	jQuery(".track-order__info .track-order__info__title").text(function () {
		return jQuery(this).text().replace("Contact Us", "Kontaktiere Uns"); 
	});
	
	jQuery(".form-verify-edit__item .form-verify-edit__label .form-verify-edit__label-text").text(function () {
		return jQuery(this).text().replace("Your Name", "Dein Name"); 
	});
	jQuery("#profile-main-info .form-verify-edit__item [name=name]").attr('placeholder', 'Dein Name');
	
	jQuery(".form-verify-edit__item .form-verify-edit__label .form-verify-edit__label-text").text(function () {
		return jQuery(this).text().replace("Email Address", "Email Adresse"); 
	});
	jQuery("#profile-main-info .form-verify-edit__item [name=email]").attr('placeholder', 'Gebe deine Email Adresse ein');
	
	jQuery(".form-verify-edit__item .form-verify-edit__label .form-verify-edit__label-text").text(function () {
		return jQuery(this).text().replace("Phone Number", "Bestellnummer (falls vorhanden)"); 
	});
	jQuery("#profile-main-info .form-verify-edit__item [name=phone]").attr('placeholder', 'Gebe deine Bestellnummer ein');
	
	jQuery(".form-verify-edit__item .form-verify-edit__label .form-verify-edit__label-text").text(function () {
		return jQuery(this).text().replace("Message", "Nachricht"); 
	});
	jQuery("#profile-main-info .form-verify-edit__item [name=message]").attr('placeholder', 'Gebe deine Bestellnummer ein');
	
	jQuery(".form-verify-edit__item .form-verify-edit__label .form-verify-edit__label-text").text(function () {
		return jQuery(this).text().replace("Enter Captcha", "Captcha"); 
	});
	jQuery("#profile-main-info .form-verify-edit__item [name=captcha-val]").attr('placeholder', 'Gebe das Captcha ein');
	
	jQuery("#profile-main-info .btn").text(function () {
		return jQuery(this).text().replace("SEND MESSAGE", "NACHRICHT SENDEN"); 
	});
	
	jQuery(".shortcuts__container-title").text(function () {
		return jQuery(this).text().replace("Legal", "SEITEN"); 
	});
	jQuery(".shortcuts__link").text(function () {
		return jQuery(this).text().replace("Refund & Return Policy", "Erstattung & Rückgabe"); 
	});
	jQuery(".shortcuts__link").text(function () {
		return jQuery(this).text().replace("Privacy Policy", "Datenschutz"); 
	});
	jQuery(".shortcuts__link").text(function () {
		return jQuery(this).text().replace("Terms & Conditions", "AGB"); 
	});
	jQuery(".shortcuts__link").text(function () {
		return jQuery(this).text().replace("Shipping Policy", "Versandrichtlinie"); 
	});
	
	jQuery(".legal__title").text(function () {
		return jQuery(this).text().replace("Terms & Conditions", "AGB"); 
	});
	
	jQuery(".legal__title").text(function () {
		return jQuery(this).text().replace("Shipping Policy", "Versandrichtlinie"); 
	});
	jQuery(".legal__title").text(function () {
		return jQuery(this).text().replace("Refund & Return Policy", "Erstattung & Rückgabe"); 
	});
	jQuery(".legal__title").text(function () {
		return jQuery(this).text().replace("Privacy Policy", "Datenschutz"); 
	});
	
	
	//checkout page
	jQuery(".cart-checkout-page .heading-title").text(function () {
		return jQuery(this).text().replace("1. Shipping Details", "1. Versandadresse"); 
	});
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("Your Email Address", "Deine Email Adresse"); 
	});
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("Phone Number", "Telefonnummer"); 
	});
	
	jQuery(".cart-checkout-page form [name=sd_phone]").attr('placeholder', 'Gebe deine Telefonnummer ein');
	
	jQuery(".cart-checkout-page form .custom-control-label").text(function () {
		return jQuery(this).text().replace("Send me exclusive offers and products updates.", "Sende mir exklusive Angebote und Rabatte"); 
	});
	
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("First Name", "Vorname"); 
	});
	jQuery(".cart-checkout-page form [name=sd_fname]").attr('placeholder', 'Gebe deinen Vornamen ein');
	
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("Last Name", "Nachname"); 
	});
	jQuery(".cart-checkout-page form [name=sd_lname]").attr('placeholder', 'Gebe deinen Nachnamen ein');
	
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("Address", "Adresse"); 
	});
	jQuery(".cart-checkout-page form [name=sd_address]").attr('placeholder', 'Gebe deine Adresse ein');
	
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("Address 2 (Apartment Unit, etc)", "Adresszusatz (optional)"); 
	});
	jQuery(".cart-checkout-page form [name=sd_address2]").attr('placeholder', 'Gebe deinen Adresszusatz ein');
	
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("City", "Stadt"); 
	});
	jQuery(".cart-checkout-page form [name=sd_city]").attr('placeholder', 'Gebe deine Stadt ein');
	
	
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("State/Province", "Bundesland"); 
	});
	
	$('.cart-checkout-page form [name=sd_state] option:contains("Select State")').text('Wähle dein Bundesland aus');
	
	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("Zip/Postal Code", "PLZ"); 
	});
	jQuery(".cart-checkout-page form [name=sd_postal_code]").attr('placeholder', 'Gebe deine Postleitzahl ein');
	

	jQuery(".cart-checkout-page form label").text(function () {
		return jQuery(this).text().replace("Country", "Land"); 
	});
	$('.cart-checkout-page form [name=sd_country] option:contains("Select Country")').text('Wähle dein Land aus');
		
	jQuery(".cart-checkout-page .heading-title").text(function () {
		return jQuery(this).text().replace("2. Billing Address", "2. Rechnungsadresse"); 
	});
	
	jQuery(".custom-radio label small").text(function () {
		return jQuery(this).text().replace("Same as shipping address", "Gleicht Lieferadresse"); 
	});
	jQuery(".custom-radio label small").text(function () {
		return jQuery(this).text().replace("Use a different billing address", "Weicht von der Lieferadresse ab"); 
	});
	
	jQuery("#different-billing-address label").text(function () {
		return jQuery(this).text().replace("First Name", "Vorname"); 
	});
	jQuery("#different-billing-address [name=billing_address_fname]").attr('placeholder', 'Gebe deinen Vornamen ein');
	
	jQuery("#different-billing-address label").text(function () {
		return jQuery(this).text().replace("Last Name", "Nachname"); 
	});
	jQuery("#different-billing-address [name=billing_address_lname]").attr('placeholder', 'Gebe deinen Nachnamen ein');
	
	jQuery("#different-billing-address label").text(function () {
		return jQuery(this).text().replace("Address", "Adresse"); 
	});
	jQuery("#different-billing-address [name=billing_address_addr1]").attr('placeholder', 'Gebe deine Adresse ein');
	
	jQuery("#different-billing-address label").text(function () {
		return jQuery(this).text().replace("Adresse 2 (Apartment Unit, etc)", "Adresszusatz (optional)"); 
	});
	jQuery("#different-billing-address [name=billing_address_addr2]").attr('placeholder', 'Gebe deinen Adresszusatz ein');
	
	jQuery("#different-billing-address label").text(function () {
		return jQuery(this).text().replace("City", "Stadt"); 
	});
	jQuery("#different-billing-address [name=billing_address_city]").attr('placeholder', 'Gebe deine Stadt ein');
	
	jQuery("#different-billing-address label").text(function () {
		return jQuery(this).text().replace("State/Province", "Bundesland"); 
	});
	$('#different-billing-address [name=billing_address_state] option:contains("Select State")').text('Wähle dein Bundesland aus');
	
	jQuery("#different-billing-address label").text(function () {
		return jQuery(this).text().replace("Zip/Postal Code", "PLZ"); 
	});
	jQuery("#different-billing-address [name=billing_address_postcode]").attr('placeholder', 'Gebe deine Postleitzahl ein');
	
	jQuery("#different-billing-address label").text(function () {
		return jQuery(this).text().replace("Country", "Land"); 
	});
	$('#different-billing-address [name=billing_address_country] option:contains("Select Country")').text('Wähle dein Land aus');
	
	jQuery(".cart-checkout-page .heading-title").text(function () {
		return jQuery(this).text().replace("3. Shipping Method", "3. Versand (Standard)"); 
	});
	
	jQuery(".cart-checkout-page .heading-title").text(function () {
		return jQuery(this).text().replace("4. Payment Information", "4. Bezahlmethode"); 
	});
	
	jQuery(".cart-checkout-page .custom-radio small").text(function () {
		return jQuery(this).text().replace("Credit Card", "Kreditkarte"); 
	});
	
	jQuery(".cart-checkout-page .stripe-code-content .form-row label").text(function () {
		return jQuery(this).text().replace("Credit or debit card", "Kreditkarte"); 
	});
	
	jQuery(".cart-checkout-cart-items .heading-title").text(function () {
		return jQuery(this).text().replace("Shopping Cart", "Bestellungsübersicht"); 
	});
	
	jQuery(".cart-checkout-cart-items .price-value span").text(function () {
		return jQuery(this).text().replace("Price:", "Preis:"); 
	});
	jQuery(".cart-checkout-cart-items [name=discount-code-input]").attr('placeholder', 'Hast du einen Gutscheincode?');

	jQuery(".cart-checkout-cart-items #apply-discount-btn").text(function () {
		return jQuery(this).text().replace("Apply", "EINLÖSEN"); 
	});
	
	jQuery(".cart-checkout-cart-items .cart-amounts-div .detail-card span").text(function () {
		return jQuery(this).text().replace("Subtotal", "Zwischensumme"); 
	});
	
	jQuery(".cart-checkout-cart-items .cart-amounts-div .detail-card span").text(function () {
		return jQuery(this).text().replace("Shipping", "Versand"); 
	});
	jQuery(".cart-checkout-cart-items .cart-amounts-div .detail-card span").text(function () {
		return jQuery(this).text().replace("Tax", "Andere Kosten"); 
	});
	
	jQuery(".cart-checkout-cart-items .cart-amounts-div .detail-card span").text(function () {
		return jQuery(this).text().replace("Grand Total", "Gesamtbetrag"); 
	});
	
	jQuery(".cart-checkout-cart-items [classname=value-head]").text(function () {
		return jQuery(this).text().replace("Including", "inkl. MwSt.:"); 
	});
	jQuery(".cart-checkout-cart-items [classname=value-head]").text(function () {
		return jQuery(this).text().replace("in taxes", ""); 
	});
	jQuery(".cart-checkout-cart-items #submit-btn").text(function () {
		return jQuery(this).text().replace("Complete purchase", "JETZT KAUFEN"); 
	});
	
	jQuery(".progress-steps__item .progress-steps__title").text(function () {
		return jQuery(this).text().replace("Email Verification", "Email gesendet"); 
	});
	jQuery(".progress-steps__item .progress-steps__title").text(function () {
		return jQuery(this).text().replace("Change Password", "Passwort ändern"); 
	});
	jQuery(".progress-steps__item .progress-steps__title").text(function () {
		return jQuery(this).text().replace("Changed Successfully", "Passwort erfolgreich geändert"); 
	});
	jQuery(".user-edit-info__title").text(function () {
		return jQuery(this).text().replace("Change Password", "Passwort ändern"); 
	});
	jQuery(".user-edit-info__container-text").text(function () {
		return jQuery(this).text().replace("We’ll send you one time verification code on your registered email.", "Bitte gebe ein neues Passwort ein und bestätige dieses."); 
	});
	
	
	jQuery(".form-verify-edit .form-verify-edit__label .form-verify-edit__label-text").text(function () {
		return jQuery(this).text().replace("Confirm New Password", "Neues Passwort Bestätigen"); 
	});
	jQuery(".form-verify-edit__item [name=confirm_password]").attr('placeholder', 'Passwort bestätigen');
	
	jQuery(".form-verify-edit .form-verify-edit__label .form-verify-edit__label-text").text(function () {
		return jQuery(this).text().replace("New Password", "Neues Passwort"); 
	});
	jQuery(".form-verify-edit__item [name=password]").attr('placeholder', 'Passwort eingeben');
	
	jQuery(".form-verify-edit__item .form-verify-edit__btn").text(function () {
		return jQuery(this).text().replace("Change password", "PASSWORT ÄNDERN"); 
	});
	
	jQuery(".user-edit-info__container .user-edit-info__container-text").text(function () {
		return jQuery(this).text().replace("You have changed your password successfully.", "Dein Passwort wurde erfolgreich geändert"); 
	});
	jQuery(".user-edit-info__btn .user-edit-info__btn-back-profile").text(function () {
		return jQuery(this).text().replace("Back to login", "Zurück zum Login"); 
	});
	
	jQuery(".needs-validation .invalid-feedback").text(function () {
		return jQuery(this).text().replace("Please provide valid email.", "Bitte trage deine Email Adresse ein"); 
	});
	jQuery(".needs-validation .invalid-feedback").text(function () {
		return jQuery(this).text().replace("Please provide first name.", "Bitte trage deinen Nachnamen ein"); 
	});
	jQuery(".needs-validation .invalid-feedback").text(function () {
		return jQuery(this).text().replace("Please provide your address.", "Bitte trage deine Adresse ein"); 
	});
	jQuery(".needs-validation .invalid-feedback").text(function () {
		return jQuery(this).text().replace("Please provide your city.", "Bitte trage deine Stadt ein"); 
	});
	jQuery(".needs-validation .invalid-feedback").text(function () {
		return jQuery(this).text().replace("Please provide your correct zip/postal code.", "Bitte trage deine Postleitzahl ein"); 
	});
	jQuery(".needs-validation .invalid-feedback").text(function () {
		return jQuery(this).text().replace("Please select your country.", "Bitte wähle dein Land aus"); 
	});
	jQuery(".needs-validation .invalid-feedback").text(function () {
		return jQuery(this).text().replace("Please provide first name.", "Bitte trage deinen Vornamen ein"); 
	});
	jQuery(".needs-validation .invalid-feedback").text(function () {
		return jQuery(this).text().replace("Please provide last name.", "Bitte trage deinen Nachnamen ein"); 
	});
	
	
	
	
	
	//header
	jQuery("header .header__top-nav-link").text(function () {
		return jQuery(this).text().replace("All Products", "Alle Produkte"); 
	});
	jQuery("header .header__top-info-link-text").text(function () {
		return jQuery(this).text().replace("Order Tracking", "DHL Tracking"); 
	});
	jQuery("header .header__top-info-link-text").text(function () {
		return jQuery(this).text().replace("Contact Us", "Kontakt"); 
	});
	jQuery("header .header__top-info-link").text(function () {
		return jQuery(this).text().replace("Sign In", "Log In"); 
	});
	jQuery("header .header__top-info-item-divide").text(function () {
		return jQuery(this).text().replace("or", "/"); 
	});
	jQuery("header .header__top-info-link").text(function () {
		return jQuery(this).text().replace("Register", "Anmelden"); 
	});
	jQuery("header .search__form-input [name=keyword]").attr('placeholder', 'Suche');
	
	//footer
	jQuery("footer .footer__top .footer__item-title").text(function () {
		return jQuery(this).text().replace("Pages", "SEITEN"); 
	});
	jQuery("footer .footer__top .footer__item-title").text(function () {
		return jQuery(this).text().replace("CONTACT US", "KONTAKT"); 
	});
	
	
	//
	jQuery(".btn-order").text(function () {
		return jQuery(this).text().replace("Add to cart", "In den Einkaufswagen"); 
	});
	jQuery(".products-items__title span").text(function () {
		return jQuery(this).text().replace("All Products", "In den Einkaufswagen"); 
	});
	
	jQuery(".fillter__title").text(function () {
		return jQuery(this).text().replace("Collections", "KATEGORIEN"); 
	});
	jQuery(".fillter__title").text(function () {
		return jQuery(this).text().replace("Collections", "KATEGORIEN"); 
	});
	
	
	
	//single product
	
	jQuery(".product-card__top-links-elem-text").text(function () {
		return jQuery(this).text().replace("Share", "TEILEN"); 
	});
	
	jQuery(".product-card__item-stock .black").text(function () {
		return jQuery(this).text().replace("Availability:", "Verfügbarkeit:"); 
	});
	jQuery(".product-card__item-stock .current_stock_span").text(function () {
		return jQuery(this).text().replace("Unlimited Stock", "Auf Lager"); 
	});
	
	jQuery(".add-to-favorite-text").text(function () {
		return jQuery(this).text().replace("Add To Wishlist", "AUF DIE WUNSCHLISTE"); 
	});
	
	jQuery(".rating-reviews__text").text(function () {
		return jQuery(this).text().replace("Reviews", "Bewertungen"); 
	});
	jQuery(".rating-reviews__text").text(function () {
		return jQuery(this).text().replace("Reviews", "Bewertungen"); 
	});
	jQuery(".add-cart-button").text(function () {
		return jQuery(this).text().replace("Add to cart", "In den Einkaufswagen"); 
	});
	jQuery(".product-card__item-pay-text").text(function () {
		return jQuery(this).text().replace("Guaranteed Safe Checkout:", "Sicher bezahlen mit:"); 
	});
	jQuery(".product-card__item-pay-text").text(function () {
		return jQuery(this).text().replace("Guaranteed Safe Checkout:", "Sicher bezahlen mit:"); 
	});
	
	jQuery(".product__descr-card-links .tabs-link").text(function () {
		return jQuery(this).text().replace("DESCRIPTION", "BESCHREIBUNG"); 
	});
	jQuery(".product__descr-card-links .tabs-link").text(function () {
		return jQuery(this).text().replace("Customer Reviews", "BEWERTUNGEN"); 
	});
	
	jQuery(".product-feedback__reviews-text").text(function () {
		return jQuery(this).text().replace("Reviews", "Bewertungen"); 
	});
	
	jQuery(".product-feedback__main-title").text(function () {
		return jQuery(this).text().replace("Product Reviews", "Kundenbewertungen"); 
	});
	jQuery("#reviewTable .dataTables_empty").text(function () {
		return jQuery(this).text().replace("No data available in table", "Noch keine Bewertungen"); 
	});
	
	
	jQuery(".modal-content .modal-header h2").text(function () {
		return jQuery(this).text().replace("Share This Product", "Teile dieses Produkt"); 
	});
	jQuery(".modal-content .modal-body h6").text(function () {
		return jQuery(this).text().replace("Share this product to your favourite social platform.", "Teile dieses Produkt auf deiner liebling social platform."); 
	});
	
	jQuery(".modal-content .custom-label").text(function () {
		return jQuery(this).text().replace("Or Copy Link", "Oder Kopiere den Link"); 
	});
	
	jQuery(".select-sort .select-dropdown .select-dropdown__item div").text(function () {
		return jQuery(this).text().replace("Price, low to high", "Preis aufsteigend"); 
	});
	jQuery(".select-sort .select-dropdown .select-dropdown__item div").text(function () {
		return jQuery(this).text().replace("Price, high to low", "Preis absteigend"); 
	});
	jQuery(".select-sort .select-dropdown .select-dropdown__item div").text(function () {
		return jQuery(this).text().replace("Date, old to new", "Datum (älteste)"); 
	});
	jQuery(".select-sort .select-dropdown .select-dropdown__item div").text(function () {
		return jQuery(this).text().replace("Date, new to old", "Datum (neueste)"); 
	});
	
	
	
	
	//search
	
	jQuery(".products-items__title span").text(function () {
		return jQuery(this).text().replace("All Products", "Alle Produkte"); 
	});
	
	jQuery(".products-page .gallary-item-container").text(function () {
		return jQuery(this).text().replace("No Record Found", "Keine Suchergebnisse"); 
	});
	
	
	//404
	
	jQuery(".error-text h1").text(function () {
		return jQuery(this).text().replace("Page not found", "SEITE NICHT GEFUNDEN"); 
	});
	
	jQuery(".error-text h5").text(function () {
		return jQuery(this).text().replace("Look like you accessed broken or expired link.", "Diese Seite konnte nicht gefunden werden."); 
	});
	
	jQuery(".error-text .btn").text(function () {
		return jQuery(this).text().replace("Back to homepage", "ZURÜCK"); 
	});
	
	
	// Confirm Order
	
	jQuery(".breadcrumbs__link").text(function () {
		return jQuery(this).text().replace("Order Confirmation", "Bestellbestätigung"); 
	});
	jQuery(".confirmed__order-checked-text").text(function () {
		return jQuery(this).text().replace("Order Confirmed", "Lieferadresse"); 
	});
	jQuery(".confirmed-info__item-title").text(function () {
		return jQuery(this).text().replace("Shipping Address", "Lieferadresse"); 
	});
	jQuery(".confirmed-info__item-title").text(function () {
		return jQuery(this).text().replace("Billing Address", "Rechnungsadresse"); 
	});
	jQuery(".confirmed__order-checked-text").text(function () {
		return jQuery(this).text().replace("Order Confirmed", "Vielen Dank für Deine Bestellung!"); 
	});
	jQuery(".confirmed__order-title").text(function () {
		return jQuery(this).text().replace("Products", "Artikel"); 
	});
	jQuery(".confirmed-info__btn .confirmed-info__btn-elem").text(function () {
		return jQuery(this).text().replace("Continue Shopping", "WEITER EINKAUFEN"); 
	});
	jQuery(".confirmed__order-price-title").text(function () {
		return jQuery(this).text().replace("Sub-Total", "Zwischensumme"); 
	});
	jQuery(".confirmed__order-price-title").text(function () {
		return jQuery(this).text().replace("Flat Shipping Rate", "Versand"); 
	});
	jQuery(".confirmed__order-price-title").text(function () {
		return jQuery(this).text().replace("Tax", "Andere Kosten"); 
	});
	jQuery(".confirmed-total-price").text(function () {
		return jQuery(this).text().replace("Grand Total", "Gesamtbetrag"); 
	});

	$('.confirmed__order-wrap:contains("Including")').each(function(){
		$(this).html($(this).html().split("Including").join(""));
	});
	$('.confirmed__order-wrap:contains("in taxes")').each(function(){
		$(this).html($(this).html().split("in taxes").join(""));
	});
	$('.confirmed__order-wrap').text().replace("Including", ""); 
	jQuery('.g_tax_amt').prepend('inkl. MwSt.: ');
	
	// Popup
	
	jQuery(".auth__options-item .tabs-link").text(function () {
		return jQuery(this).text().replace("Sign In", "LOG IN"); 
	});
	jQuery(".auth__options-item .tabs-link").text(function () {
		return jQuery(this).text().replace("Register", "REGISTRIEREN"); 
	});
	jQuery(".auth__form-row-item [name=email]").attr('placeholder', 'Deine Email Adresse');
	
	jQuery(".auth__form-item .auth__form-label-title").text(function () {
		return jQuery(this).text().replace("Password", "Passwort"); 
	});
	jQuery(".auth__form-row-item [name=password]").attr('placeholder', 'Dein Passwort');
	
	jQuery(".auth__form-submit-wrap .auth__form-submit").text(function () {
		return jQuery(this).text().replace("Sign In", "LOG IN"); 
	});
	
	jQuery("#retrieve-password .auth__form-label-elem .auth__form-label-title").text(function () {
		return jQuery(this).text().replace("Registered Email", "Registrierte Email"); 
	});
	jQuery("#retrieve-password .auth__form-label-icon [name=email]").attr('placeholder', 'Deine registrierte Email Adresse');
	
	jQuery("#retrieve-password .auth__form-retrieve-submit .auth__form-retrieve-btn").text(function () {
		return jQuery(this).text().replace("Send Verification code", "PASSWORT ZURÜCKSETZEN"); 
	});
	
	//signup
	
	jQuery("#form-sign-up .auth__form-label-title").text(function () {
		return jQuery(this).text().replace("First Name *", "Vorname"); 
	});
	jQuery("#form-sign-up .auth__form-label-icon [name=firstname]").attr('placeholder', 'Vorname');
	
	jQuery("#form-sign-up .auth__form-label-title").text(function () {
		return jQuery(this).text().replace("Last Name *", "Nachname"); 
	});
	jQuery("#form-sign-up .auth__form-label-icon [name=lastname]").attr('placeholder', 'Nachname');
	
	jQuery("#form-sign-up .auth__form-label-icon [name=email]").attr('placeholder', 'Deine Email Adresse');
	
	jQuery("#form-sign-up .auth__form-label-title").text(function () {
		return jQuery(this).text().replace("Passwort *", "Passwort"); 
	});
	jQuery("#form-sign-up .auth__form-label-icon [name=password]").attr('placeholder', 'Dein Passwort');
	
	jQuery("#form-sign-up .auth__form-password-hints").text(function () {
		return jQuery(this).text().replace("Use 6 or more characters with a mix of letters, number & symbols", "Ein Passwort mit mind. 6 Zeichen aus Buchstaben, Zahlen und Symbolen"); 
	});
	jQuery("#form-sign-up .auth__form-submit-wrap .auth__form-submit").text(function () {
		return jQuery(this).text().replace("Create my account", "REGISTRIEREN"); 
	});
	jQuery("#form-sign-up .auth__form-terms").html(function () {
		return jQuery(this).html().replace("By creating an account, you agree to the dinodeals ", "Indem du dich für einen Account registrierst, akzeptierst du die dinodeals <span class='auth__form-terms-link'> <a href='http//dinodeals.net/terms-condition'>Terms &amp; Conditions</a></span>"); 
	});
	
	
	

	//contact validation
	
	jQuery("#profile-main-info .alert-success").html(function () {
		return jQuery(this).html().replace("Thanks for contacting us. We'll get back to you as soon as possible.", "Vielen Dank für deine Nachricht. Wir werden uns schnellstmöglich bei dir melden."); 
	});
	
	jQuery(".select-sort-value").html(function () {
		return jQuery(this).html().replace("Sort", "Sortieren"); 
	});
	
	jQuery(".select-sort-value").text(function () {
		return jQuery(this).text().replace("Price, low to high", "Preis aufsteigend"); 
	});
	jQuery(".select-sort-value").text(function () {
		return jQuery(this).text().replace("Price, high to low", "Preis absteigend"); 
	});
	jQuery(".select-sort-value").text(function () {
		return jQuery(this).text().replace("Date, old to new", "Datum (älteste)"); 
	});
	jQuery(".select-sort-value").text(function () {
		return jQuery(this).text().replace("Date, new to old", "Datum (neueste)"); 
	});
	
	
	//mobile header
	jQuery(".header__bottom .mobile-list li a").text(function () {
		return jQuery(this).text().replace("All Products", "Alle Produkte"); 
	});
	jQuery(".header__bottom .mobile-list li a").text(function () {
		return jQuery(this).text().replace("Order Tracking", "DHL Tracking"); 
	});
	jQuery(".header__bottom .mobile-list li a").text(function () {
		return jQuery(this).text().replace("Contact Us", "Kontakt"); 
	});
	jQuery(".header__bottom .mobile-list li a").text(function () {
		return jQuery(this).text().replace("Sign In", "Log In"); 
	});
	jQuery(".header__bottom .mobile-list li a").text(function () {
		return jQuery(this).text().replace("Register", "Anmelden"); 
	});
	jQuery(".select-category-value").text(function () {
		return jQuery(this).text().replace("All Categories", "Alle Kategorien"); 
	});
	jQuery(".select-dropdown__item .select-dropdown__option").text(function () {
		return jQuery(this).text().replace("All Categories", "Alle Kategorien"); 
	});
});







setInterval(function () {
	jQuery(".cart__discount-form .discount-code-reset__elem").html(function () {
		return jQuery(this).html().replace("Reset", "NEU"); 
	});
	
	jQuery(".cart__discount-form .cart__discount-form-btn").html(function () {
		return jQuery(this).html().replace("Applied", "FEHLER"); 
	});
	
	jQuery(".cart__discount-form .alert-danger").html(function () {
		return jQuery(this).html().replace("Warning: Code is either invalid or expired!", "Der Gutscheincode ist ungültig"); 
	});
	
	jQuery(".cart__title").html(function () {
		return jQuery(this).html().replace("Cart", "Einkaufswagen"); 
	});
	
	jQuery(".cart__item-product_unit_into_price span").html(function () {
		return jQuery(this).html().replace("Price:", "Preis:"); 
	});
	jQuery(".cart__discount-input").attr('placeholder', 'Hast du einen Gutscheincode?');
	
	jQuery(".cart__discount-form .cart__discount-form-btn").html(function () {
		return jQuery(this).html().replace("Apply", "PRÜFEN"); 
	});
	
	jQuery(".cart__total-item .cart__total-text").html(function () {
		return jQuery(this).html().replace("Subtotal", "Zwischensumme"); 
	});
	jQuery(".cart__grand-total .cart__total-text").html(function () {
		return jQuery(this).html().replace("Total", "Gesamtbetrag"); 
	});
	jQuery(".cart__bottom-btn a .select-value-item").html(function () {
		return jQuery(this).html().replace("checkout", "ZUR KASSE"); 
	});
	
	jQuery(".cart__items-suggested .label-strip").html(function () {
		return jQuery(this).html().replace("Offer", "ANGEBOT"); 
	});
	
	jQuery(".cart__items-suggested .add-to-cart-suggested").html(function () {
		return jQuery(this).html().replace("add to cart", "IN DEN EINKAUFSWAGEN"); 
	});
	
	jQuery(".cart__empty-text").html(function () {
		return jQuery(this).html().replace("No Product In Cart", "DEIN EINKAUFSWAGEN IST LEER"); 
	});
	
	
}, 100);
 