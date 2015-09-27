Meteor.methods
  loadGithubJobs: ->
    @unblock()
    Meteor.http.call "GET", "https://jobs.github.com/positions.json", (error,result) ->
      if(error)
        console.log error
      if(result)
        Meteor.call "writeJobs", (result.data)

  writeJobs: (jobs) ->
      Jobs.remove({})
      Jobs.insert job for job in jobs
