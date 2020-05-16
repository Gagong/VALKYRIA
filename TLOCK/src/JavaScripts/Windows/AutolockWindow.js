class AutolockWindow {
	createWindow() {
		this.autolockWindow = WindowFactory.createWindow({
			width: 320,
			text: "Autolocker"
		});

		let options = [
			{
				name: 'lockPlayers',
				type: 'checkbox',
				labelText: 'Autolock Players (key: z)',
				appendTo: this.autolockWindow,
				attrs:{
					checked: window.settings.lockPlayers
				},
				event: function () {
					window.settings.lockPlayers = this.checked;
				}
			},
			{
				name: 'lockNpc',
				type: 'checkbox',
				labelText: 'Autolock NPCs (key: x)',
				appendTo: this.autolockWindow,
				attrs:{
					checked: window.settings.lockNpc
				},
				event: function () {
				window.settings.lockNpc = this.checked;
				}
			},
			{
				name: 'attackTarget',
				type: 'checkbox',
				labelText: 'Auto attack target',
				appendTo: this.autolockWindow,
				attrs:{
					checked: window.settings.autoattack
				},
				event: function () {
					window.settings.autoattack = this.checked;
				}
			}
		];

		options.forEach((option) => {
			this[option.name] = ControlFactory.createControl(option);
		});

	}
}