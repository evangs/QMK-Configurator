export default [
   {
      value:'backlightLevels',
      display:'Backlight Levels',
      type:'config',
      component:'input',
      default:'1',
      description: 'Backlight dimmer steps.'
   },
   {
      value:'usbMaxPowerConsumption',
      display:'Max Power Consumption',
      type:'config',
      component:'input',
      default:'100',
      description: 'Maximum USB power consumption.'
   },
   {
      value:'debouncingDelay',
      display:'Debouncing Delay',
      type:'config',
      component:'input',
      default:'5',
      description: 'Delay when reading the value of the pin.'
   },
   {
      value:'tappingTerm',
      display:'Tapping Term',
      type:'config',
      component:'input',
      default:'175',
      description: 'How long before a tap becomes a hold. If set above 500, a key tapped during the tapping term will turn it into a hold too.'
   },
   {
      value:'lockingSupportEnabled',
      display:'Locking Support',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Mechanical locking support.'
   },
   {
      value:'lockingResyncEnabled',
      display:'Locking Resync',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Tries to keep switch state consistent with keyboard LED state.'
   },
   {
      value:'debugEnabled',
      display:'Debug',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Enable debug mode.'
   },
   {
      value:'printEnabled',
      display:'Print',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Enable/disable printing/debugging.'
   },
   {
      value:'actionLayerEnabled',
      display:'Action Layer',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Enable/disable layers.'
   },
   {
      value:'actionTappingEnabled',
      display:'Action Tapping',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Enable/disable tapping features.'
   },
   {
      value:'actionOneShotEnabled',
      display:'Action One Shot',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Enable/disable one shot modifiers.'
   },
   {
      value:'actionMacroEnabled',
      display:'Action Macro',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Enable/disable all macro handling.'
   },
   {
      value:'actionFunctionEnabled',
      display:'Action Function',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Enable/disable the action function.'
   },
   {
      value:'matrixHasGhost',
      display:'Matrix Ghosting',
      type:'config',
      component:'checkbox',
      default:false,
      description: 'Prevent ghosting on hand wired boards.'
   },
   {
      value:'bootmagicEnabled',
      display:'Bootmagic',
      type:'rule',
      component:'checkbox',
      default:true,
      description: 'Enable/disable virtual DIP switch configuration(+1000).'
   },
   {
      value:'mousekeyEnabled',
      display:'Mouse Key',
      type:'rule',
      component:'checkbox',
      default:true,
      description: 'Enable/disable mouse keys(+4700).'
   },
   {
      value:'extrakeyEnabled',
      display:'Extra Key',
      type:'rule',
      component:'checkbox',
      default:true,
      description: 'Enable/disable audio control and System control(+450).'
   },
   {
      value:'consoleEnabled',
      display:'Console',
      type:'rule',
      component:'checkbox',
      default:true,
      description: 'Enable/disable console for debug(+400).'
   },
   {
      value:'commandEnabled',
      display:'Command',
      type:'rule',
      component:'checkbox',
      default:true,
      description: 'Enable/disable commands for debug and configuration.'
   },
   {
      value:'sleepLedEnabled',
      display:'Sleep LED',
      type:'rule',
      component:'checkbox',
      default:true,
      description: 'Enable/disable LED toggle on sleep.'
   },
   {
      value:'nkroEnabled',
      display:'NKRO',
      type:'rule',
      component:'checkbox',
      default:false,
      description: 'Enable/disable n-key rollover. Register as many keys as you can press at once without "dropping" any characters.'
   },
   {
      value:'backlightEnabled',
      display:'Backlight',
      type:'rule',
      component:'checkbox',
      default:true,
      description: 'Enable/disable LED backlight.'
   }
]
