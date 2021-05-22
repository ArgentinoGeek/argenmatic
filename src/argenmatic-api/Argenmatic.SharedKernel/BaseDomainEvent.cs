using MediatR;
using System;

namespace Argenmatic.SharedKernel
{
    public abstract class BaseDomainEvent : INotification
    {
        public DateTime DateTimeUtcOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
