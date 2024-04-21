import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gio from "gi://Gio";

Gtk.init();

let loop = GLib.MainLoop.new(null, false);

const win = new Gtk.Window({
  default_width: 300,
  default_height: 250,
});

// Either uncomment this or move registering the resource before Gtk.Window

// const icon_theme = Gtk.IconTheme.get_for_display(win.get_display());
// icon_theme.add_resource_path('/foo/bar/icons/')

const resource = Gio.resource_load("resources.gresource");
resource._register();

let image = new Gtk.Image({
  icon_name: "envelope",
});
win.set_child(image);

win.present();
loop.run();
