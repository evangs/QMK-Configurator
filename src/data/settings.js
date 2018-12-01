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
      description: 'Maximum USB power consumption'
   },
   {
      value:'debouncingDelay',
      display:'Debouncing Delay',
      type:'config',
      component:'input',
      default:'5',
      description: ''
   },
   {
      value:'tappingTerm',
      display:'Tapping Term',
      type:'config',
      component:'input',
      default:'175',
      description: ''
   },
   {
      value:'lockingSupportEnabled',
      display:'Locking Support',
      type:'config',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'lockingResyncEnabled',
      display:'Locking Resync',
      type:'config',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'debugEnabled',
      display:'Debug',
      type:'config',
      component:'checkbox',
      default:true,
      description: 'Enable debug mode'
   },
   {
      value:'printEnabled',
      display:'Print',
      type:'config',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'actionLayerEnabled',
      display:'Action Layer',
      type:'config',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'actionTappingEnabled',
      display:'Action Tapping',
      type:'config',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'actionOneShotEnabled',
      display:'Action One Shot',
      type:'config',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'actionMacroEnabled',
      display:'Action Macro',
      type:'config',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'actionFunctionEnabled',
      display:'Action Function',
      type:'config',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'matrixHasGhost',
      display:'Matrix Ghosting',
      type:'config',
      component:'checkbox',
      default:false,
      description: ''
   },
   {
      value:'bootmagicEnabled',
      display:'Bootmagic',
      type:'rule',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'mousekeyEnabled',
      display:'Mouse Key',
      type:'rule',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'extrakeyEnabled',
      display:'Extra Key',
      type:'rule',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'consoleEnabled',
      display:'Console',
      type:'rule',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'commandEnabled',
      display:'Command',
      type:'rule',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'sleepLedEnabled',
      display:'Sleep LED',
      type:'rule',
      component:'checkbox',
      default:true,
      description: ''
   },
   {
      value:'nkroEnabled',
      display:'NKRO',
      type:'rule',
      component:'checkbox',
      default:false,
      description: ''
   },
   {
      value:'backlightEnabled',
      display:'Backlight',
      type:'rule',
      component:'checkbox',
      default:true,
      description: ''
   }
]
