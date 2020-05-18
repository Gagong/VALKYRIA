class AutolockWindow {
	createWindow() {
		this.autolockWindow = WindowFactory.createWindow({
			width: 320,
			text: "Autolocker"
		});


		let options = [
			{
				name: 'keyEnemy',
				type: 'text',
				
				labelBefore: true,
				labelText: 'Enemy keys: ',
				appendTo: this.autolockWindow,
				attrs:{
					value: "z",
				},
				eventType: 'keyup',
				event: function (){
					window.settings.enemyAutoLockKeys = this.value;
					$('span:last-child', this.label).text(' (' + this.value + ')');
					
				}
			},
			{
				name: 'keyNpc',
				type: 'text',
				
				labelBefore: true,
				labelText: 'Npc keys: ',
				appendTo: this.autolockWindow,
				attrs:{

					value: "x",
				},
				eventType: 'keyup',
				event: function (){
					window.settings.npcAutoLockKeys = this.value;
					$('span:last-child', this.label).text(' (' + this.value + ')');
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
			},
		];

		options.forEach((option) => {
			this[option.name] = ControlFactory.createControl(option);
		});

	}
}