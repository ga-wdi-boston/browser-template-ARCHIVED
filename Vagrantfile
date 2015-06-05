Vagrant.require.version ">= 1.7.2"

Vagrant.configure(2) do |config|

  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  config.vm.box = "chef/ubuntu-14.04"
  config.vm.box_check_update = true
  config.vm.hostname = "vagrant-ubuntu.chromatico.net"

  config.vm.provider "virtualbox" do |vb|

    vb.gui = true
    vb.memory = "1024"

  end

  config.vm.provider "vmware_fusion" do |vm|

    vm.gui = true
    vm.vmx['memsize'] = "1024"

  end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.

  config.vm.provision "shell", path:"vagrant-provision.sh"

end
np
