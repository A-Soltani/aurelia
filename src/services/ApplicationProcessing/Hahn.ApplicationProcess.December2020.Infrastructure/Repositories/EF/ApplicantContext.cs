﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Hahn.ApplicationProcess.December2020.Domain.SeedWork;
using Microsoft.EntityFrameworkCore;

namespace Hahn.ApplicationProcess.December2020.Infrastructure.Repositories.EF
{
    public class ApplicantContext : DbContext, IUnitOfWork
    {
        public ApplicantContext(DbContextOptions<ApplicantContext> options) : base(options)
        {
        }

        public async Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            await base.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
