module.exports = {
  deactivate: function () {
    if (this.pkg) this.pkg.removeItems()
  },

  consumeToolBar: function (toolBar) {
    this.pkg = toolBar('tool-bar-custom')
    const pkg = this.pkg

    pkg.addButton({
      icon: 'document-text',
      iconset: 'ion',
      tooltip: 'Open File',
      callback: 'application:open-file'
    })
    pkg.addButton({
      icon: 'close-round',
      iconset: 'ion',
      tooltip: 'Close All Tabs',
      callback: 'tabs:close-all-tabs'
    })

    pkg.addSpacer()

    pkg.addButton({
      icon: 'columns',
      iconset: 'fa',
      tooltip: 'Split Right',
      callback: 'pane:split-right'
    })
    const paneDown = pkg.addButton({
      icon: 'columns',
      iconset: 'fa',
      tooltip: 'Split Down',
      callback: 'pane:split-down'
    })
    paneDown.element.classList.add('fa-rotate-270')

    if (atom.packages.isPackageLoaded('outline-ui')) {
      pkg.addSpacer()
      pkg.addButton({
        icon: 'sitemap',
        iconset: 'fa',
        tooltip: 'Toggle Outline',
        callback: 'outline-ui:toggle'
      })
    }

    pkg.addSpacer()

    pkg.addButton({
      icon: 'refresh',
      iconset: 'ion',
      tooltip: 'Reload Window',
      callback: 'window:reload'
    })
    pkg.addButton({
      icon: 'bug',
      tooltip: 'Developer Tools',
      callback: 'window:toggle-dev-tools'
    })

    pkg.addSpacer()

    if (atom.packages.isPackageLoaded('git-plus')) {
      pkg.addButton({
        icon: 'git-plain',
        iconset: 'devicon',
        tooltip: 'Git Plus (Run)',
        callback: 'git-plus:run'
      })
    }
    pkg.addButton({
      icon: 'github-plain',
      iconset: 'devicon',
      tooltip: 'Fetch',
      callback: 'github:fetch'
    })
    pkg.addButton({
      icon: 'repo-force-push',
      tooltip: 'Force Push',
      callback: 'github:force-push'
    })
    pkg.addButton({
      icon: 'repo-push',
      tooltip: 'Push',
      callback: 'github:push'
    })
    pkg.addButton({
      icon: 'repo-pull',
      tooltip: 'Pull',
      callback: 'github:pull'
    })

    pkg.addSpacer()

    pkg.addButton({
      icon: 'markdown',
      tooltip: 'Markdown Preview',
      callback: 'markdown-preview:toggle'
    })

    pkg.addSpacer()

    pkg.addButton({
      icon: 'cloud-upload',
      iconset: 'icomoon',
      tooltip: 'Backup',
      callback: 'sync-settings:backup'
    })
    pkg.addButton({
      icon: 'new-tab',
      iconset: 'icomoon',
      tooltip: 'View Backup',
      callback: 'sync-settings:view-backup'
    })

    pkg.addSpacer()

    pkg.addButton({
      icon: 'navicon-round',
      iconset: 'ion',
      tooltip: 'Command Palette',
      callback: 'command-palette:toggle'
    })
    pkg.addButton({
      icon: 'gear',
      tooltip: 'Preferences',
      callback: 'settings-view:open'
    })

    pkg.addSpacer()

    pkg.addButton({
      icon: 'atom-original',
      iconset: 'devicon',
      tooltip: 'About Atom',
      callback: 'application:about'
    })
  }
}
