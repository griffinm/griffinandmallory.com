app_name = 'malloryandgriffin.com'

# Ensure that bundle is used for rake tasks
SSHKit.config.command_map[:rake] = "bundle exec rake"

set :application, app_name
set :deploy_to, "/var/www/#{app_name}"
set :keep_releases, 5
set :user, 'ubuntu'
set :stages, ['production']

set :repo_url, 'git@github.com:griffinm/griffinandmallory.com.git'

set :ssh_options, {
  keys: %w(~/.ssh/GRIFFINET-PK1.pem),
}

namespace :deploy do
  desc 'Restart Apache'
  task :restart do
    on 'ubuntu@web1' do
      execute 'sudo service apache2 restart'
    end
  end
  after :publishing, :restart

end