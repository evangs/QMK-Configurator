module.exports = (rules, rotaryEncoders) => {
  return (
`MCU = ${rules.mcu}
F_CPU = ${rules.processorFrequency}
ARCH = ${rules.architecture}
F_USB = ${rules.inputClockFrequency}

OPT_DEFS += -DINTERRUPT_CONTROL_ENDPOINT
OPT_DEFS += -DBOOTLOADER_SIZE=${rules.bootloaderSize}

${rules.bootmagicEnabled ? 'BOOTMAGIC_ENABLE = yes' : ''}
NO_USB_STARTUP_CHECK = yes
${rules.mousekeyEnabled ? 'MOUSEKEY_ENABLE = yes' : ''}
${rules.extrakeyEnabled ? 'EXTRAKEY_ENABLE = yes' : ''}
${rules.consoleEnabled ? 'CONSOLE_ENABLE = yes' : ''}
${rules.commandEnabled ? 'COMMAND_ENABLE = yes' : ''}
${rules.sleepLedEnabled ? 'SLEEP_LED_ENABLE = yes' : ''}
${rules.nkroEnabled ? 'NKRO_ENABLE = yes' : ''}
${rules.backlightEnabled ? 'BACKLIGHT_ENABLE = yes' : ''}
${rules.rgbLightEnabled ? 'RGBLIGHT_ENABLE = yes' : ''}
CUSTOM_MATRIX = lite
${rotaryEncoders ? 'ENCODER_ENABLE = yes' : ''}
MIDI_ENABLE = no
AUDIO_ENABLE = no
BLUETOOTH_ENABLE = no
SRC += matrix.c`);
};
