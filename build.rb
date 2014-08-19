require 'listen'

#sapphire buildscript v1
#depends on listen and uglify.js
#[listen](https://github.com/guard/listen)
#[uglify.js](https://github.com/mishoo/UglifyJS2)

#change to dev output dir
Dir.chdir("dev/")

#dev build method
def build_dev
	if File.exists?("sapphire.js")
		File.unlink("sapphire.js")
	end
	Dir.glob("../src/*.[a-z][a-z]") do |file|
		puts file
		append = File.read(file)
		File.open("sapphire.js", "a") do |handle|
			handle.puts append
		end
	end	
end

def build_release
	build_dev
	%x(uglifyjs sapphire.js -m -c -o ../sapphire.min.js)
end

options = Hash.new

ARGV.each do |opt|
	if opt == "dev"
		options[:dev] = true
		build_dev #inital build
	end

	if opt == "release"
		options[:release] = true
		build_release #inital build
	end
end

#listen for file changes in the /src dir
listener = Listen.to('../src/') do | modified, added, removed|
	puts "#{modified} was changed"
	puts "#{added} was added"
	puts "#{removed} was removed"
	if options[:dev]
		puts "re-building dev"
		build_dev
	end

	if options[:release]
		puts "building release"
		build_release
	end
	
end

#yay
listener.start
sleep