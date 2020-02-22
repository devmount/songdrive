// all i18n messages
export default {
	en: {
		object: {
			song: 'No Songs | One Song | {n} Songs',
		},
		page: {
			dashboard: 'Dashboard',
			songs: 'Songs',
			setlists: 'Setlists',
			administration: 'Administration',
			settings: 'Settings',
			profile: 'Profile',
			docu: 'Documentation',
			github: 'GitHub',
		},
		modal: {
			newSong: 'New Song',
			editSong: 'Edit Song',
			deleteSong: 'Delete Song',
			newSetlist: 'New Setlist',
			editSetlist: 'Edit Setlist',
			deleteSetlist: 'Delete Setlist',
			addUser: 'Add User',
			editUser: 'Edit User',
			deleteUser: 'Delete User',
			tags: 'Tags',
			translations: 'Translations',
			signUp: 'Sign Up',
		},
		divider: {
			start: 'Start',
			account: 'Account',
			info: 'Info',
			manage: 'Manage',
			language: 'Language',
			view: 'View',
			tuning: 'Key',
			export: 'Export',
			copy: 'Copy',
			stats: 'Stats',
		},
		button: {
			signIn: 'Sign In',
			signUp: 'Sign Up',
			signOut: 'Sign Out',
			shuffle: 'Shuffle',
			show: 'Show',
			edit: 'Edit',
			duplicate: 'Duplicate',
			delete: 'Delete',
			saveProfile: 'Save Profile',
			export: 'Export',
			cancel: 'Cancel',
			close: 'Close',
			createSong: 'Create Song',
			updateSong: 'Update Song',
			createSetlist: 'Create Setlist',
			updateSetlist: 'Update Setlist',
			back: 'Back',
			present: 'Present',
			filetypeTxt: '.txt',
			filetypeSng: '.sng',
			filetypePdf: '.pdf',
			launch: 'Launch',
			formatPlain: 'Plain',
			formatMarkdown: 'Markdown',
			formatSlack: 'Slack',
			exportSetlistList: 'List',
			exportSetlistSheets: 'Sheets',
			addUser: 'Add User',
			updateUser: 'Update User',
		},
		switch: {
			chords: 'Chords',
			sync: 'Sync',
		},
		tooltip: {
			setlistAdd: 'Add new Setlist',
			songAdd: 'Add new Song',
		},
		app: {
			name: 'SongDrive',
			created: 'created with <ion-icon name="heart-outline"></ion-icon> by',
			license: 'MIT license'
		},
		widget: {
			songsStored: 'Songs stored',
			setlistsStored: 'Setlists stored',
			setlistsCreated: 'Setlists created',
			songsPerformed: 'Songs performed',
			languages: 'Languages',
			random: 'Random',
			newest: 'Newest',
			oldest: 'Oldest',
			popular: 'Popular',
			goToSongs: 'Go to Songs',
			goToSetlists: 'Go to Setlists',
			users: 'Users',
			registrations: 'Registrations',
			tags: 'Tags',
			backup: 'Backup',
		},
		title: {
			songTuning: 'Song key',
			songOccuredOn: 'This song occured on {num} setlists',
			songPublishedIn: 'This song was published in {year}',
			noYear: 'No year available for this song',
			setlistContains: 'This setlist contains {num} songs'
		},
		placeholder: {
			select: '',
			searchSongTitle: 'Song title ...',
			searchSetlistTitle: 'Setlist title ...',
			searchTagName: 'Tag name ...',
			tag: 'Tag ...',
			tuning: 'Key ...',
			year: 'Year ...',
			exampleSongTitle: 'e.g. Amazing Grace',
			exampleSongSubtitle: 'e.g. How sweet the sound',
			exampleSongAuthors: 'e.g.  Edwin Othello Excell | John Newton ',
			exampleSongCcli: 'e.g. 22025',
			exampleSongPublisher: 'e.g. Public Domain',
			exampleSongYear: 'e.g. 2016',
			exampleSongNote: 'general notes, e.g. capo 3',
			exampleSongYoutubeId: 'e.g. cF0S3uKdVJA',
			exampleSongContent: 'songtext with chords and markers, e.g.:\n\n--v\n  G          C  \nThis is the verse text\n D        G  \nJust an example text\n\n--c\n  D           C  \nThis is the chorus text\n D        C      G  \nJust an example text\n\n--b\n  Em  \nThis is the bridge text\n C        D  \nJust an example text',
			exampleSetlistTitle: 'e.g. Sunday Service',
			exampleUserName: 'e.g. John Doe',
			exampleUserEmail: 'e.g. john@doe.com',
			examplePassword: 'e.g. {p}',
			repeatPassword: 'Repeat Password',
		},
		field: {
			title: 'Title',
			subtitle: 'Subtitle',
			language: 'Language',
			authors: 'Authors',
			year: 'Year',
			tuning: 'Key',
			tags: 'Tags',
			ccli: 'CCLI',
			publisher: 'Publisher',
			note: 'Note',
			youtubeId: 'Youtube ID',
			translations: 'Translations',
			content: 'Content',
			date: 'Date',
			creator: 'Creator',
			songs: 'Songs',
			email: 'Email',
			photo: 'Photo',
			name: 'Name',
			role: 'Role',
			password: 'Password',
		},
		error: {
			requiredTitle: 'A title is required.',
			songAlreadyExists: 'A song with this title already exists in this language. Please change either the title or the language.',
			setlistAlreadyExists: 'A setlist with this title already exists on this date. Please change either the title or the date.',
			requiredLanguage: 'The language is required.',
			requiredContent: 'The song content is missing.',
			requiredName: 'A name is required.',
			requiredEmail: 'An email address is required.',
			requiredPassword: 'A password is required.',
			passwordsDontMatch: 'The passwords don\'t match.',
			passwordTooShort: 'The password is too short.',
		},
		label: {
			preview: 'Preview',
		},
		role: {
			admin: 'Admin',
			editor: 'Editor',
			performer: 'Performer',
			reader: 'Reader',
			unconfirmed: 'Unconfirmed',
		},
		text: {
			customizeProfile: 'Customize your profile data',
			customizeUi: 'Customize the user interface',
			manageConfirmedUsers: 'Manage confirmed users',
			manageUnconfirmedUsers: 'Manage unconfirmed users',
			noUnconfirmedUsers: 'No unconfirmed users',
			goodWork: 'Good work!',
			manageTags: 'Manage all tags',
			exportImportData: 'Export and import SongDrive data',
			noTranslations: 'This song has no translation yet.',
			noTagsSelected: 'No Tags selected',
			selectSomeTags: 'Select some tags for the current song',
			selection: 'Selection',
			selected: 'selected',
			noSongsSelected: 'No Songs selected',
			selectSomeSongs: 'Select some songs for this setlist',
			selectSomeTranslations: 'Select all songs that are a translation to the current song',
			reallyDeleteSong: 'Do you really want to delete the Song «{title}» ?',
			reallyDeleteSetlist: 'Do you really want to delete the Setlist «{title}» ?',
			reallyDeleteUser: 'Do you really want to delete the User «{name}» ?',
			cannotBeUndone: 'This cannot be undone.',
			createNewAccount: 'Create a new SongDrive account.',
		},
		toast: {
			signedIn: 'Signed in',
			signedInText: 'Good to see you, {name}!',
			signedOut: 'Signed out',
			signedOutText: 'Be blessed and have a nice day!',
			signedUp: 'Signed up',
			signedUpText: 'Thank you for registering, {name}! You can now continue using SongDrive.',
			verficationSent: 'Verification email sent',
			verficationSentText: 'Please click the link that was sent to your email address to verify it.',
			setlistDeleted: 'Setlist deleted',
			setlistDeletedText: 'The setlist was successfully removed.',
			songDeleted: 'Song deleted',
			songDeletedText: 'The song was successfully removed.',
			userDeleted: 'User deleted',
			userDeletedText: 'The user was successfully removed.',
			userUpdated: 'User updated',
			userUpdatedText: 'Your data was successfully saved.',
			databaseExported: 'Database exported',
			databaseExportedText: 'The whole database was successfully exported in JSON format.',
			setlistAdded: 'Setlist added',
			setlistUpdated: 'Setlist updated',
			setlistSavedText: 'The setlist was successfully saved.',
			songAdded: 'Song added',
			songUpdated: 'Song updated',
			songSavedText: 'The song was successfully saved.',
			userAdded: 'User added',
			userSavedText: 'User data was successfully saved.',
			songOrderUpdated: 'Song order updated',
			syncActivated: 'Setlist Sync activated',
			syncDeactivated: 'Setlist Sync deactivated',
			setlistStatusSavedText: 'The setlist status was successfully saved.',
			copiedToClipboard: 'Copied to clipboard',
			setlistFormatCopiedText: 'Setlist in {format} format was successfully copied.',
			failedToCopy: 'Failed to copy',
			exportedPdf: 'Exported as PDF',
			exportedSetlistPdfText: 'The setlist was successfully exported as PDF file.',
			exportedText: 'Exported as Text',
			exportedSongTextText: 'The song was successfully exported in plain text format.',
			exportedSng: 'Exported as SNG',
			exportedSongSngText: 'The song was successfully exported in SNG format.',
			exportedSongPdfText: 'The song was successfully exported in PDF format.',
		},
	},
	de: {
		object: {
			song: 'Keine Lieder | Ein Lied | {n} Lieder',
		},
		page: {
			dashboard: 'Übersicht',
			songs: 'Songs',
			setlists: 'Setlisten',
			administration: 'Administration',
			settings: 'Einstellungen',
			profile: 'Profil',
			docu: 'Dokumentation',
			github: 'GitHub',
		},
		modal: {
			newSong: 'Neuer Song',
			editSong: 'Song Bearbeiten',
			deleteSong: 'Song Löschen',
			newSetlist: 'Neue Setlist',
			editSetlist: 'Setlist Bearbeiten',
			deleteSetlist: 'Setlist Löschen',
			addUser: 'Benutzer hinzufügen',
			editUser: 'Benutzer Bearbeiten',
			deleteUser: 'Benutzer Löschen',
			tags: 'Tags',
			translations: 'Übersetzungen',
			signUp: 'Registrieren',
		},
		divider: {
			start: 'Start',
			account: 'Konto',
			info: 'Info',
			manage: 'Verwalten',
			language: 'Sprache',
			view: 'Ansicht',
			tuning: 'Tonart',
			export: 'Export',
			copy: 'Kopieren',
			stats: 'Statistik',
		},
		button: {
			signIn: 'Login',
			signUp: 'Registrieren',
			signOut: 'Logout',
			shuffle: 'Zufällig',
			show: 'Anzeigen',
			edit: 'Bearbeiten',
			duplicate: 'Duplizieren',
			delete: 'Löschen',
			saveProfile: 'Profil Speichern',
			export: 'Export',
			cancel: 'Abbrechen',
			close: 'Schließen',
			createSong: 'Song Erstellen',
			updateSong: 'Song Aktualisieren',
			createSetlist: 'Setlist Erstellen',
			updateSetlist: 'Setlist Aktualisieren',
			back: 'Back',
			present: 'Präsentieren',
			filetypeTxt: '.txt',
			filetypeSng: '.sng',
			filetypePdf: '.pdf',
			launch: 'Starten',
			formatPlain: 'Text',
			formatMarkdown: 'Markdown',
			formatSlack: 'Slack',
			exportSetlistList: 'Liste',
			exportSetlistSheets: 'Liedzettel',
			addUser: 'Benutzer Hinzufügen',
			updateUser: 'Benutzer Aktualisieren',
		},
		switch: {
			chords: 'Akkorde',
			sync: 'Sync',
		},
		tooltip: {
			setlistAdd: 'Neue Setlist hinzufügen',
			songAdd: 'Neuen Song hinzufügen',
		},
		app: {
			name: 'SongDrive',
			created: 'mit <ion-icon name="heart-outline"></ion-icon> erstellt von',
			license: 'MIT Lizens'
		},
		widget: {
			songsStored: 'Songs gespeichert',
			setlistsStored: 'Setlisten gespeichert',
			setlistsCreated: 'Setlisten erstellt',
			songsPerformed: 'Songs aufgeführt',
			languages: 'Sprachen',
			random: 'Zufällige',
			newest: 'Aktuellste',
			oldest: 'Älteste',
			popular: 'Beliebte',
			goToSongs: 'Alle Songs anzeigen',
			goToSetlists: 'Alle Setlisten anzeigen',
			users: 'Benutzer',
			registrations: 'Registrierungen',
			tags: 'Tags',
			backup: 'Backup',
		},
		title: {
			songTuning: 'Tonart',
			songOccuredOn: 'Dieser Song wurde in {num} Setlisten verwendet',
			songPublishedIn: 'Dieser Song wurde {year} veröffentlicht',
			noYear: 'Für diesen Song ist keine Jahresangabe verfügbar',
			setlistContains: 'Diese Setlist enthält {num} Songs'
		},
		placeholder: {
			select: '',
			searchSongTitle: 'Song Titel...',
			searchSetlistTitle: 'Setlist Titel...',
			searchTagName: 'Tag Name ...',
			tag: 'Tag ...',
			tuning: 'Tonart ...',
			year: 'Jahr ...',
			exampleSongTitle: 'z.B. Erstaunliche Gnade',
			exampleSongSubtitle: 'z.B. Wie süß der Klang',
			exampleSongAuthors: 'z.B.  Edwin Othello Excell | John Newton',
			exampleSongCcli: 'z.B. 22025',
			exampleSongPublisher: 'z.B. Public Domain',
			exampleSongYear: 'z.B. 2016',
			exampleSongNote: 'Allgemeine Notizen, z.B. Capo 3',
			exampleSongYoutubeId: 'z.B. cF0S3uKdVJA',
			exampleSongContent: 'Songtext mit Akkorden und Markern, z.B.:\n\n--v\n G             C  \nDas ist die Strophe\nD            G  \nEinfach ein Beispieltext\n\n--c\nD            C  \nDas ist der Refrain\nD            C      G  \nEinfach ein Beisieltext\n\n--b\n Em  \nDas ist die Bridge\nC            D  \nEinfach ein Beispieltext',
			exampleSetlistTitle: 'z.B. Gottesdienst',
			exampleUserName: 'z.B. Max Muster',
			exampleUserEmail: 'z.B. max@muster.de',
			examplePassword: 'z.B. {p}',
			repeatPassword: 'Password wiederholen',
		},
		field: {
			title: 'Titel',
			subtitle: 'Untertitel',
			language: 'Sprache',
			authors: 'Autoren',
			year: 'Jahr',
			tuning: 'Tonart',
			tags: 'Tags',
			ccli: 'CCLI',
			publisher: 'Herausgeber',
			note: 'Notiz',
			youtubeId: 'Youtube ID',
			translations: 'Übersetzungen',
			content: 'Inhalt',
			date: 'Datum',
			creator: 'Ersteller',
			songs: 'Songs',
			email: 'Email',
			photo: 'Photo',
			name: 'Name',
			role: 'Rolle',
			password: 'Passwort',
		},
		error: {
			requiredTitle: 'Ein Titel muss angegeben werden.',
			songAlreadyExists: 'Ein Song mit diesem Titel existiert bereits in dieser Sprache. Bitte entweder den Titel oder die Sprache ändern.',
			setlistAlreadyExists: 'Eine Setlist mit diesem Titel existiert bereits an diesem Datum. Bitte entweder den Titel oder das Datum ändern.',
			requiredLanguage: 'Die Sprache muss ausgewählt werden.',
			requiredContent: 'Der Inhalt des Songs fehlt.',
			requiredName: 'Ein Name muss angegeben werden.',
			requiredEmail: 'Eine E-Mail-Adresse muss angegeben werden.',
			requiredPassword: 'Ein Passwort muss angegeben werden.',
			passwordsDontMatch: 'Die Passwörter stimmen nicht überein.',
			passwordTooShort: 'Das Passwort ist zu kurz.',
		},
		label: {
			preview: 'Vorschau',
		},
		role: {
			admin: 'Admin',
			editor: 'Editor',
			performer: 'Performer',
			reader: 'Reader',
			unconfirmed: 'Unbestätigt',
		},
		text: {
			customizeProfile: 'Passe deine Profildaten an',
			customizeUi: 'Passe die Benutzeroberfläche an',
			manageConfirmedUsers: 'Bestätigte Benutzer verwalten',
			manageUnconfirmedUsers: 'Unbestätigte Benutzer verwalten',
			noUnconfirmedUsers: 'Keine unbestätigten Benutzer',
			goodWork: 'Gute Arbeit!',
			manageTags: 'Alle Tags verwalten',
			exportImportData: 'Export und Import der SongDrive Daten',
			noTranslations: 'Dieser Song hat bisher keine Übersetzungen.',
			noTagsSelected: 'Keine Tags ausgewählt',
			selectSomeTags: 'Wähle ein paar Tags für den aktuellen Song aus',
			selection: 'Auswahl',
			selected: 'ausgewählt',
			noSongsSelected: 'Keine Songs ausgewählt',
			selectSomeSongs: 'Wähle ein paar Lieder für diese Setlist aus',
			selectSomeTranslations: 'Wähle alle Songs die eine Übersetzung des aktuellen Songs sind',
			reallyDeleteSong: 'Möchtest du wirklich den Song «{title}» löschen?',
			reallyDeleteSetlist: 'Möchtest du wirklich die Setlist «{title}» löschen?',
			reallyDeleteUser: 'Möchtest du wirklich den Benutzer «{name}» löschen?',
			cannotBeUndone: 'Das kann nicht rückgängig gemacht werden.',
			createNewAccount: 'Erstelle ein neues SongDrive Konto.',
		},
		toast: {
			signedIn: 'Eingeloggt',
			signedInText: 'Schön dich zu sehen, {name}!',
			signedOut: 'Ausgeloggt',
			signedOutText: 'Sei gesegnet und einen schönen Tag noch!',
			signedUp: 'Registriert',
			signedUpText: 'Vielen Dank für die Registrierung, {name}! Du kannst SongDrive nun weiter nutzen.',
			verficationSent: 'Bestätigungs-E-Mail gesendet',
			verficationSentText: 'Bitte klicke auf den Link, der dir gesendet wurde, um deine E-Mail-Adresse zu bestätigen.',
			setlistDeleted: 'Setlist gelöscht',
			setlistDeletedText: 'Die Setlist wurde erfolgreich entfernt.',
			songDeleted: 'Song gelöscht',
			songDeletedText: 'Der Song wurde erfolgreich entfernt.',
			userDeleted: 'Benutzer gelöscht',
			userDeletedText: 'Der Benutzer wurde erfolgreich entfernt.',
			userUpdated: 'Benutzer aktualisiert',
			userUpdatedText: 'Deine Daten wurden erfolgreich gespeichert.',
			databaseExported: 'Datenbank exportiert',
			databaseExportedText: 'Die gesamte Datenbank wurde erfolgreich im JSON Format exportiert.',
			setlistAdded: 'Setlist hizugefügt',
			setlistUpdated: 'Setlist aktualisiert',
			setlistSavedText: 'Die Setlist wurde erfolgreich gespeichert.',
			songAdded: 'Song hizugefügt',
			songUpdated: 'Song aktualisiert',
			songSavedText: 'Der Song wurde erfolgreich gespeichert.',
			userAdded: 'Benutzer hinzugefügt',
			userSavedText: 'Die Benutzerdaten wurden erfolgreich gespeichert.',
			songOrderUpdated: 'Songreihenfolge aktualisiert',
			syncActivated: 'Synchronisierung aktiviert',
			syncDeactivated: 'Synchronisierung deaktiviert',
			setlistStatusSavedText: 'Der Status wurde erfolgreich gespeichert.',
			copiedToClipboard: 'In die Zwischenablage kopiert',
			setlistFormatCopiedText: 'Setlist wurd im {format} Format erfolgreich kopiert.',
			failedToCopy: 'Kopieren ist fehlgeschlagen',
			exportedPdf: 'Exportiert als PDF',
			exportedSetlistPdfText: 'Die Setlist wurde erfolgreich als PDF Datei exportiert.',
			exportedText: 'Exportiert als Text',
			exportedSongTextText: 'Der Song wurde erfolgreich im Textformat exportiert.',
			exportedSng: 'Exportiert als SNG',
			exportedSongSngText: 'Der Song wurde erfolgreich im SNG Format exportiert.',
			exportedSongPdfText: 'Der Song wurde erfolgreich als PDF Datei exportiert.',
		},
	},
}
