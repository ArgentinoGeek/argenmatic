using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Argenmatic.SharedKernel.Interfaces
{
    public interface IRepository<T> where T : BaseEntity, IAggregateRoot
    {
        Task<T> GetByIdAsync(int id);
        Task<List<T>> ListAsync();
        Task<List<T>> ListAsync(Expression<Func<T>> expression);
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
    }
}
